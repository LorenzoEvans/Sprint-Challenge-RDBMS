// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3', // indicates DB type
    connection: {
      filename: './dev.sqlite3'
    },
    useNullAsDefault: true,
    migrations: {
     directory: './data/migrations' // pulls in migrations
    },
    seeds: {
     directory: './data/seeds' // pulls in seed data
    }
  }
};
