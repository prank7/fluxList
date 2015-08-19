var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var request = require('superagent');

var apiUtils = {
  getAllUsers: function(){
    request.get('/api/users').set('Accept', 'application/json').end(function(err, res) {
      AppDispatcher.handleAction({
        actionType: appConstants.USER_SENT,
        data: res.body
      })
    });
  }
};

module.exports = apiUtils;