import { ErrorRequestHandler } from 'express'
import HttpError, { errors, defaultErrorCode } from './httpError'

/**
 * Error handler for HttpError - signature is crucial! keep 4 arguments
 */
// eslint-disable-next-line @typescript-eslint/no-unused-vars
const errorHandler: ErrorRequestHandler = (error: HttpError, req, res, next): void => {
  if (error?.code && typeof error.code === 'number') {
    res.status(error.code)
    res.json({
      statusCode: error.code,
      message: error?.message || errors[error.code],
    })
  } else {
    res.status(defaultErrorCode)
    res.json({ message: errors[defaultErrorCode] })
  }
  res.end()
}

export default errorHandler
