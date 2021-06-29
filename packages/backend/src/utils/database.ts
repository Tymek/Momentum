import { createPool, DatabasePoolType } from 'slonik'

const defaultDatabaseUrl =
  process.platform === 'win32' || process.platform === 'darwin'
    ? 'postgres://postgres:postgres@localhost:5432/postgres'
    : 'postgres://postgres:postgres@postgres:5432/postgres'

const databaseUrl = process.env.HASURA_GRAPHQL_DATABASE_URL || defaultDatabaseUrl

const pool: DatabasePoolType = createPool(databaseUrl)

export * from 'slonik'
export default pool
