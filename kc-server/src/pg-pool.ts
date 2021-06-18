import pg from 'pg'

const pool = new pg.Pool({
  connectionString: 'pg://kc:angrydroplet@localhost:5432/kc',
})
pool.on('error', (error) => {
  console.error(error)
}) // Don't let a pg restart kill your app

export default pool
