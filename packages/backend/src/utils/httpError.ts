export const errors = {
  400: 'Bad Request',
  401: 'Unauthorized',
  403: 'Forbidden',
  404: 'Not Found',
  405: 'Method Not Allowed',
  406: 'Not Acceptable',
  407: 'Proxy Authentication Required',
  408: 'Request Timeout',
  409: 'Conflict',
  410: 'Gone',
  411: 'Length Required',
  412: 'Precondition Failed',
  413: 'Payload Too Large',
  414: 'Uri Too Long',
  415: 'Unsupported Media Type',
  416: 'Range Not Satisfiable',
  417: 'Expectation Failed',
  418: 'Im A Teapot',
  421: 'Misdirected Request',
  422: 'Unprocessable Entity',
  423: 'Locked',
  424: 'Failed Dependency',
  425: 'Too Early',
  426: 'Upgrade Required',
  428: 'Precondition Required',
  429: 'Too Many Requests',
  431: 'Request Header Fields Too Large',
  451: 'Unavailable For Legal Reasons',
  500: 'Internal Server Error',
  501: 'Not Implemented',
  502: 'Bad Gateway',
  503: 'Service Unavailable',
  504: 'Gateway Timeout',
  505: 'Http Version Not Supported',
  506: 'Variant Also Negotiates',
  507: 'Insufficient Storage',
  511: 'Network Authentication Required',
}

export const defaultErrorCode = 400

export type HttpErrorCode = keyof typeof errors

export type HttpErrorType = { message: string; statusCode?: HttpErrorCode }

/**
 * Extends `Error` with `code` field
 * @examples
 * ```ts
 * new HttpError(404)
 * new HttpError('Unknown error')
 * new HttpError('Something borked', 500)
 * new HttpError(new Error('🫖'), 418)
 * ```
 */
export class HttpError extends Error {
  public code?: HttpErrorCode

  constructor(codeOrMessageOrError: string | Error | HttpErrorCode, statusCode?: HttpErrorCode) {
    let code = statusCode !== undefined ? statusCode : defaultErrorCode
    let message = errors[defaultErrorCode]

    if (typeof codeOrMessageOrError === 'number') {
      if (statusCode === undefined) {
        code = codeOrMessageOrError as HttpErrorCode
      }
      message = errors[code] || `${code}`
    } else if (typeof codeOrMessageOrError === 'string') {
      message = codeOrMessageOrError
    } else {
      message = codeOrMessageOrError.message
    }

    super(message)
    this.message = message
    this.code = code

    if (Error.captureStackTrace) {
      Error.captureStackTrace(this, HttpError)
    }

    this.name = 'HttpError'
  }

  public toJSON(): HttpErrorType {
    return {
      message: this.message,
      statusCode: this.code,
    }
  }
}

export default HttpError
