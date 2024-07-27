import BaseError from "./BaseError.js"

export class ValidationError extends BaseError {
    constructor(code, message) {
        super(code, message)
    }
}
