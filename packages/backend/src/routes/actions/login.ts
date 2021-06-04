import { RequestHandler } from 'express'
import { compare, hash } from 'bcrypt'

import { Mutation_RootLoginArgs, Mutation_Root, User } from '@-local/db/lib/generated/types'
import HttpError from '../../utils/httpError'
import actionInput from '../../utils/actionInput'
import db, { sql } from '../../utils/database'
import createLoginCookie from '../../utils/createLoginCookie'

const hander: RequestHandler = async (req, res, next) => {
  try {
    const { username, password } = actionInput<Mutation_RootLoginArgs>(req)

    const data: User | null = await db.maybeOne(
      sql`
        SELECT *
        FROM public.user
        WHERE username = ${username}
      `,
    )

    if (!data) {
      throw new HttpError('Username not found', 401)
    }

    const isPasswordCorrect = await compare(password, data.password)
    if (!isPasswordCorrect) {
      throw new HttpError('Incorrect password', 401)
    }

    const cookie = createLoginCookie({ username, password: await hash(data.password, 10) })
    res.setHeader('Set-Cookie', cookie)

    const userInfo: Mutation_Root['login'] = { id: data.id, username: data.username }

    res.json(userInfo)
  } catch (error) {
    next(error)
    // throw new HttpError(500)
  }
}

export default hander
