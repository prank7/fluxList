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
    clientID: "539462910404-foe1hp9cldrv8ts4209b37ean7jrcb1h.apps.googleusercontent.com",
    clientSecret: "b1GcU6dt5V6UeIXWgqJ_YI2M",
    callbackURL: "/auth/google/callback"
  }
}