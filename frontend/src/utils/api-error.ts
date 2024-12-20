export class ApiError extends Error {
  type: string
  details: {type: string, location: string, input: string}
  constructor(
    type: string,
    message: string,
    details: {
      type: string, 
      location: string,
      input: string
    }
  ) {
    super(message)
    this.type = type
    this.details = details
  }
}
