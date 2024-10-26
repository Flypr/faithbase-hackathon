//HttpCode = 200 | 201 | 400 | 401 | 403 | 404 | 500;

export class AppError extends Error {
  constructor(name, httpCode, description, isOperational) {
    super(description);

    Object.setPrototypeOf(this, new.target.prototype);
    this.name = name;
    this.httpCode = httpCode;
    this.isOperational = isOperational;

    Error.captureStackTrace(this);
  }
}

//Error example -> throw new AppError("Invalid token", 401, "You are not authorized", true);
