module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './.sqlite/dev.db3'
    },
    useNullAsDefault: true,
  }

};
