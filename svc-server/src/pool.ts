import pg from 'pg'
import { config } from './env.js'

const pool = new pg.Pool({
  connectionString: config.DATABASE_URL,
})
pool.on('error', (error) => {
  console.error(error)
}) // Don't let a pg restart kill your app

export { pool }
