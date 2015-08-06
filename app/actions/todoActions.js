var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');

var todoActions = {
	addItem: function(item){
		AppDispatcher.handleAction({
			actionType: appConstants.ADD_ITEM,
			data: item
		})
	}
}

module.exports = todoActions;