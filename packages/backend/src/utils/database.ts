import { createPool, DatabasePoolType } from 'slonik'

const databaseUrl =
  process.env.HASURA_GRAPHQL_DATABASE_URL || 'postgres://postgres:postgres@postgres:5432/postgres'

const pool: DatabasePoolType = createPool(databaseUrl)

export * from 'slonik'
export default pool
