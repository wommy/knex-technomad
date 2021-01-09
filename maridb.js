const mariadb = require('mariadb');
require('dotenv').config()

//create connection
const db = mariadb.createConnection({
	user: 'root',
	password: '',
	// host: '45.33.74.134',
	database: 'jegan_stock',
})

// connect
db.connect( err => {
	try {
		console.log('its working')
	} catch (err) { console.error(err) }
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