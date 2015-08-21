var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var apiUtils = require('../utils/apiUtils');

var authActions = {
  getSession: function(){
    apiUtils.getSession();
  }
}

module.exports = authActions;