var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _state = {
  users: []
}

var setState = function(params) {
  params = params || {};
  console.log(params);
  objectAssign(_state, params);
  console.log(_state);
};

var userStore = objectAssign({}, EventEmitter.prototype, {
  getState: function(){
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
      setState(action.data);
      userStore.emit(CHANGE_EVENT);
      break;
    case appConstants.USER_LOADING:
      userStore.emit(CHANGE_EVENT);
    default: 
      return true;
  }
});


module.exports = userStore;