var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var objectAssign = require('react/lib/Object.assign');
var EventEmitter = require('events').EventEmitter;

var CHANGE_EVENT = 'change';

var _store = {
	list: []
};


var addItem = function(item){
	_store.list.push(item)
}


var todoStore = objectAssign({}, EventEmitter.prototype, {
	addChangeListener: function(callback) {
		this.on(CHANGE_EVENT, callback);
	},

	removeChangeListener: function(callback) {
		this.removeListener(CHANGE_EVENT, callback)
	},

	getList: function() {
		return _store.list;
	} 
});

AppDispatcher.register(function(payload){
	var action = payload.action;
	switch(action.actionType){
		case appConstants.ADD_ITEM:
			addItem(action.data);
			todoStore.emit(CHANGE_EVENT);
			break;
		default: 
			return true;
	}
});

module.exports = todoStore;