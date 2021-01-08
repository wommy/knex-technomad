const mariadb = require('mariadb');

const pool = mariadb.createPool({
	user: 'root',
	password: '',
})

async function asyncFunction() {
	let conn;
	try {
		conn = await pool.getConnection()
		const rows = await conn.query("SELECT 1 as val")
		console.log(rows)
		const res = await conn.query("INSERT INTO myTable value (?, ?)")
	}
}