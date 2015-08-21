var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var sessionInit = {
  id: false
}

var session = sessionInit;

var authStore = objectAssign({}, EventEmitter.prototype, {

  getSession: function() {
    console.log("FROM AUTH", session)
    return session;
  },

  clearSession: function() {
    return sessionInit;
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

AppDispatcher.register( function(payload) {
  var action = payload.action;
  switch (action.actionType){
    case appConstants.SESSION_START:
      console.log("Registering in auth store", action.data)
      if (action.data)
        session = action.data;
        
      authStore.emit(CHANGE_EVENT);
      break;
    case appConstants.SESSION_END:
      session = authStore.clearSession();
      authStore.emit(CHANGE_EVENT);
      break;
    default: 
      return true
  }
})


module.exports = authStore;






