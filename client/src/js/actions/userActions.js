var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var apiUtils = require('../utils/apiUtils');

var userActions = {
  getAllUsers: function() {
    console.log("In action");
    apiUtils.getAllUsers();
  }
}

module.exports = userActions;