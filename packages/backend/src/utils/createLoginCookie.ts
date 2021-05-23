import { serialize, CookieSerializeOptions } from 'cookie'
import { Mutation_RootLoginArgs } from '@-local/db/lib/generated/types'

const createLoginCookie = (
  data?: Mutation_RootLoginArgs,
  overrides?: CookieSerializeOptions,
): string =>
  serialize('TOKEN', JSON.stringify(data || ''), {
    httpOnly: true,
    secure: process.env.NODE_ENV !== 'development',
    expires: new Date(Date.now() + 12_096e5), // now + 14 days
    sameSite: 'lax',
    path: '/',
    ...overrides,
  })

export default createLoginCookie
