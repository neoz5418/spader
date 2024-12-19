
export class ApiError extends Error {
  type: string
  constructor(
    type: string,
    message: string,
  ) {
    super(message)
    this.type = type
  }
}
