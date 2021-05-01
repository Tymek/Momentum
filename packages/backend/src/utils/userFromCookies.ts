import { isEmpty } from 'ramda'
import { compare } from 'bcrypt'
import type { Request } from 'express'

import { User, Mutation_RootLoginArgs } from '@-local/db/generated/types'
import db, { sql } from './database'

const userFromCookies = async (req: Request): Promise<User | null> => {
  if (!req.cookies?.TOKEN) {
    return null
  }

  const input = JSON.parse(req.cookies?.TOKEN)

  if (!input || isEmpty(input)) {
    return null
  }

  const { username, password } = input as Mutation_RootLoginArgs

  if (!username || !password) {
    return null
  }

  const data: User | null = await db.maybeOne(sql`
		SELECT id, password
		FROM public.user
		WHERE username = ${username}
	`)

  if (!data) {
    return null
  }

  const isPasswordCorrect = await compare(data.password, password)
  if (!isPasswordCorrect) {
    return null
  }

  return data
}

export default userFromCookies
