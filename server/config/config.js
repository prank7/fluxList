module.exports = {
  //RethinkDB details
  dbConfig: {
    host: process.env.RDB_HOST || 'localhost',
    port: parseInt(process.env.RDB_PORT) || 28015,
    db: process.env.RDB_DB || 'fluxlist',
    tables: {
      'users': 'id',
      'dos': 'id',
      'donts': 'id'
    }
  },
  // Google OAuth Details
  google: {
    clientID: "fillintheblanks",
    clientSecret: "fillintheblanks",
    callbackURL: "/auth/google/callback"
  }
}
