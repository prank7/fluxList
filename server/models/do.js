var thinky = require('../config/database');

var r = thinky.r;
var type = thinky.type;

// Create the model
var Do = thinky.createModel("dos", {
  id: type.string(),
  name: type.string(),
  createdAt: Date
});

Do.ensureIndex("createdAt")

// Define do API Endpoints
var doApi = {

// Get all dos
  getAll: function(callback) {
    Do.orderBy('createdAt').run(function(err, data) {
      callback(err, data);
    });
  },
  
// Create a Do
// this is redundant, use this.getAll, binding doesnt help!!!! Ask.
  create: function(name, callback) { 
    Do.insert({
      name: name,
      createdAt: Date()
    }).run(function (err, result) {
      if (result.inserted == 1) {
        console.log("data key generated_keys", result.generated_keys[0]);
        Do.get(result.generated_keys[0]).run(function(err, data) {
          console.log("create", data)
          callback(err, data);
        });
      }
    })
  },

  destroy: function(id, callback){
    Do.filter({id: id}).delete().run(function (err, result) {
      console.log("delete result", result)
      if (result) {
        Do.orderBy('createdAt').run(function(err, data) {
          callback(err, data);
        });
      }
    })
  }

};

module.exports = doApi;
