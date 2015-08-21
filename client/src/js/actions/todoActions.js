var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var todoUtils = require('../utils/todoUtils');

var todoActions = {
  createDo: function(newDo){
    todoUtils.createDo(newDo);
  },

  getAllDo: function(){
    todoUtils.getAllDo();
  },

  deleteDoItem: function(id){
    todoUtils.deleteDoItem(id);
  }
}

module.exports = todoActions;