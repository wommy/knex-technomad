const mariadb = require('mariadb')

const pool = mariadb.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER, 
  password: process.env.DB_PWD,
  database: 'test'
  // socketPath: '/run/mysqld//mysqld.sock'
})

async function asyncFunction() {
  let conn
  let sql = 'SELECT * FROM myTable'
  try {
	  conn = await pool.getConnection()
	  const rows = await conn.query(sql)
    console.log(rows)
    return rows
	  // const res = await conn.query("INSERT INTO myTable value (?, ?)", [1, "mariadb"])
    // console.log(res)
    // return res
  } catch (err) {
	  throw err
  } finally {
	  if (conn) return conn.end()
  }
}

asyncFunction();