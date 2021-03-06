var middleware = require('./config/middleware');
var thinky = require('./config/database');
var index = require('./routes/index');
var profile = require('./routes/profile')
var apiUsers = require('./api/users');
var apiUser = require('./api/user');
var apiDos = require('./api/do');
var auth = require('./auth');


module.exports = function(app) {

  // Add common middleware here
  middleware(app);

  //Setup the Database, if not setup already
  thinky.databaseSetUp();

  // All routes
  app.use('/', index);
  app.use('/api/users', apiUsers);
  app.use('/api/user', apiUser);
  app.use('/api/dos', apiDos)
  app.use('/auth', auth);
  app.use('/profile', profile)
  app.get('/logout', function(req, res, next) {
    res.send(req.logout());
  });

  // catch 404 and forward to error handler
  app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
  });

  // development error handler
  // will print stacktrace
  if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
      res.status(err.status || 500).json({
        message: err.message,
        error: err
      });
    });
  }

  // production error handler
  // no stacktraces leaked to user
  app.use(function(err, req, res, next) {
    res.status(err.status || 500).json({
      message: err.message,
      error: {}
    });
  });

};