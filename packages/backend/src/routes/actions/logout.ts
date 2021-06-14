import { RequestHandler } from 'express'

import { Mutation_Root } from '@-local/db/lib/types'
import createLoginCookie from '../../utils/createLoginCookie'
import type { ActionBody } from '../../utils/actionInput'

const handler: RequestHandler = (req, res) => {
  const cookie = createLoginCookie(undefined, {
    expires: new Date(0),
  })

  res.setHeader('Set-Cookie', cookie)

  const { session_variables: headers } = req.body as ActionBody<never>
  const id = headers['x-hasura-user-id']
  const username = headers['x-hasura-user-username']

  if (username === undefined || id === undefined) {
    return res.json({})
  }

  const userInfo: Mutation_Root['logout'] = { id, username }

  res.json(userInfo)
}

export default handler
