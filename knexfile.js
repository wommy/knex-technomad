require('dotenv').config();

// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/lessons.db3'
    },
    useNullAsDefault: true
  },

  staging: {
    client: 'mysql',
    connection: {
      host: '127.0.0.1',
      user: 'w0m',
      password: process.env.DB_PASSWD,
      database: 'lessons'
    }
  }
};
