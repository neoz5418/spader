import { token as refreshToken } from "@/gen/clients/token";
import { AxiosError } from "axios";
import { Mutation, Query } from "@tanstack/react-query";
import {
  setAccessToken,
  removeAccessToken,
  getRefreshToken,
  setRefreshToken,
  removeRefreshToken,
} from "./tokens";

let isRedirecting = false;
let isRefreshing = false;
let failedQueue: {
  query?: Query<unknown, unknown, unknown>;
  mutation?: Mutation<unknown, unknown, unknown, unknown>;
  variables?: unknown;
}[] = [];

const errorHandler = (
  error: unknown,
  query?: Query<unknown, unknown, unknown>,
  mutation?: Mutation<unknown, unknown, unknown, unknown>,
  variables?: unknown
) => {
  const { status, message } = (error as AxiosError);

  if (status === 401) {
    if (mutation) refreshTokenAndRetry(undefined, mutation, variables);
    else refreshTokenAndRetry(query);
  } else console.error("[+]",message);
};

export const queryErrorHandler = (error: Error, query: Query<unknown, unknown, unknown>) => {
  errorHandler(error, query);
};

export const mutationErrorHandler = (
  error: unknown,
  variables: unknown,
  context: unknown,
  mutation: Mutation<unknown, unknown, unknown, unknown>
) => {
  errorHandler(error, undefined, mutation, variables);
};

const processFailedQueue = () => {
  failedQueue.forEach(({ query, mutation, variables }) => {
    if (mutation) {
      const { options } = mutation;
      mutation.setOptions({ ...options});
      mutation.execute(variables);
    }
    if (query) query.fetch();
  });
  isRefreshing = false;
  failedQueue = [];
};

const refreshTokenAndRetry = async (
  query?: Query<unknown, unknown, unknown>,
  mutation?: Mutation<unknown, unknown, unknown, unknown>,
  variables?: unknown
) => {
  try {
    if (!isRefreshing) {
      isRefreshing = true;
      failedQueue.push({ query, mutation, variables });
      const { access_token, refresh_token: newRefreshToken } = await refreshToken(
        {
            grant_type: 'refresh_token',
            refresh_token: getRefreshToken()!,
        }
      );
      setAccessToken(access_token);
      setRefreshToken(newRefreshToken);
      processFailedQueue();
    } else failedQueue.push({ query, mutation, variables });
  } catch {
    removeAccessToken();
    removeRefreshToken();
    if (!isRedirecting) {
      isRedirecting = true;
      window.location.href = "/sign-in"
    }
  }
};
