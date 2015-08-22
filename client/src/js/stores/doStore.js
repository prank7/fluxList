var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var dos = [];

var doStore = objectAssign({}, EventEmitter.prototype, {

  getAllDo: function() {
    console.log("FROM do", dos)
    return dos;
  },

  addNewDo: function(newDo){
    console.log(newDo);
    dos.push(newDo);
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
    case appConstants.DO_CREATED:
      // console.log("Registering in do store", action.data)
      if (action.data)
        doStore.addNewDo(action.data)
      doStore.emit(CHANGE_EVENT);
      break;
    case appConstants.DO_SENT:
      if (action.data)
        dos = action.data;
      doStore.emit(CHANGE_EVENT);
    case appConstants.DO_DELETED:
      if (action.data)
        dos = action.data;
      doStore.emit(CHANGE_EVENT);
    default: 
      return true
  }
})


module.exports = doStore;
