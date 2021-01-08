const knex = require('knex')({
	client: 'sqlite3',
	connection: {
		filename: "./foobar.db"
	},
	useNullAsDefault: true;
});

knex.schema.createTable('users', function (table) {
  table.increments();
  table.string('name');
  table.timestamps();
})

