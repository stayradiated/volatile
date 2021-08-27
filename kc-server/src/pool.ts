import pg from 'pg'
import env from 'env-var'

const DATABASE_URL = env
  .get('DATABASE_URL')
  .required()
  .asString()

const pool = new pg.Pool({
  connectionString: DATABASE_URL,
})
pool.on('error', (error) => {
  console.error(error)
}) // Don't let a pg restart kill your app

export { pool }
