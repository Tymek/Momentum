import { timingSafeEqual } from 'crypto'
import type { RequestHandler } from 'express'

import HttpError from './httpError'

const actionSecret = process.env.HASURA_ACTION_SECRET || 'secret'

const verifyActionSecret: RequestHandler = (req, res, next) => {
  const header = req.headers['x-hasura-action-secret']

  if (
    actionSecret &&
    header &&
    typeof header === 'string' &&
    timingSafeEqual(Buffer.from(header), Buffer.from(actionSecret))
  ) {
    next()
  } else {
    throw new HttpError(403)
  }
}

export default verifyActionSecret
