import pg from 'pg'
import env from 'env-var'

const DB_URL = env.get('DB_URL').required().asString()

const pool = new pg.Pool({
  connectionString: DB_URL,
})
pool.on('error', (error) => {
  console.error(error)
}) // Don't let a pg restart kill your app

export default pool
