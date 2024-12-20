export class ApiError extends Error {
  status: number
  type: string
  details: {type: string, location: string, input: string}
  constructor(
    status: number,
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
    this.status = status
    this.details = details
  }
}
