var AppDispatcher = require('../dispatcher/AppDispatcher');
var appConstants = require('../constants/appConstants');
var request = require('superagent');

var todoUtils = {
  createDo: function(newDo){
    request.post('/api/dos').send(newDo).set('Accept', 'application/json').end(function(err, res) {
      console.log(res);
      AppDispatcher.handleAction({
        actionType: appConstants.DO_CREATED,
        data: res.body
      })
    });
  },

  getAllDo: function(){
    request.get('/api/dos').set('Accept', 'application/json').end(function(err, res) {
      AppDispatcher.handleAction({
        actionType: appConstants.DO_SENT,
        data: res.body
      })
    });
  },

  deleteDoItem: function(id){
    request.del('/api/dos/'+ id).set('Accept', 'application/json').end(function(err, res) {
      AppDispatcher.handleAction({
        actionType: appConstants.DO_DELETED,
        data: res.body
      })
    });
  }

};

module.exports = todoUtils;