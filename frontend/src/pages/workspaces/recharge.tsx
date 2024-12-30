import {
	useCheckWorkspaceAccountRechargeHook,
	useRechargeWorkspaceAccountHook,
} from "@/gen";
import { useCurrentWorkspace } from "@/hooks/use-setting.ts";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
