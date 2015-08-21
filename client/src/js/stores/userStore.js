var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _state = [];

var createAll = function(response) {
  console.log("response", response);
  _state = response;
};

var userStore = objectAssign({}, EventEmitter.prototype, {
  getState: function(){
    console.log("from store", JSON.stringify(_state));
    return _state;
  },

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }
});

AppDispatcher.register(function(payload){
  var action = payload.action;
  switch(action.actionType){
    case appConstants.USER_SENT:
      createAll(action.data);
      userStore.emit(CHANGE_EVENT);
      break;
    case appConstants.USER_LOADING:
      userStore.emit(CHANGE_EVENT);
    default: 
      return true;
  }
});


module.exports = userStore;