var express = require('express');
var Do = require('../models/do');
var auth = require('../auth/auth.service');
var router = express.Router();

// GET /api/dos/ 
router.get('/', function(req, res) {
  Do.getAll(function(err, data) {
    if(err) {
      return res(err);
    } else {
      return res.send(data);
    }
  })
});

// POST /api/dos/ 
router.post('/', function(req, res) {
  Do.create(req.body.name, function(err, data) {
    if(err) {
      return res(err);
    } else {
      return res.send(data);
    }
  })
});

// DELETE /api/dos/id
router.delete('/:id',function(req, res) {
  Do.destroy(req.params.id, function(err, data) {
    if(err) {
      return res(err);
    } else {
      return res.send(data);
    }
  })
});

module.exports = router;
