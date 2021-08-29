import pg from 'pg'
import env from 'env-var'

const NODE_ENV = env.get('NODE_ENV').required().asString()
const isTestEnv = NODE_ENV === 'test'

const DB_URL = env
  .get(isTestEnv ? 'DATABASE_URL_TEST' : 'DATABASE_URL')
  .required()
  .asString()

const pool = new pg.Pool({
  connectionString: DB_URL,
})
pool.on('error', (error) => {
  console.error(error)
}) // Don't let a pg restart kill your app

export { pool }
