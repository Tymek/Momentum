import { RequestHandler } from 'express'
import userFromCookies from '../utils/userFromCookies'

/**
 * @see https://hasura.io/docs/latest/graphql/core/auth/authentication/webhook.html
 */
const handler: RequestHandler = async (req, res) => {
  const data = await userFromCookies(req)

  if (!data) {
    return res.json({
      'x-hasura-role': 'anonymous',
    })
  }

  return res.json({
    'x-hasura-role': 'manager',
    'x-hasura-user-id': `${data.id}`,
    'x-hasura-user-username': `${data.username}`,
  })
}

export default handler
