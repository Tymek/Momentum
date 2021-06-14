import { RequestHandler } from 'express'

import { Query_Root } from '@-local/db/lib/types'
import HttpError from '../../utils/httpError'
import type { ActionBody } from '../../utils/actionInput'

const handler: RequestHandler = (req, res) => {
  const { session_variables: headers } = req.body as ActionBody<never>
  const id = headers['x-hasura-user-id']
  const username = headers['x-hasura-user-username']

  if (username === undefined || id === undefined) {
    throw new HttpError('Not logged in', 412)
  }

  // TODO: refresh cookie expiration

  const userInfo: Query_Root['me'] = { id, username }

  res.json(userInfo)
}

export default handler
