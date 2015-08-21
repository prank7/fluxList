var express = require('express');
var User = require('../models/users');
var auth = require('../auth/auth.service');
var router = express.Router();

// GET /api/user/ 
router.get('/', auth.isLoggedIn, function(req, res) {
  console.log("user", req.session)
  User.getCurrent(req.user[0].id, function(err, data) {
    if(err) {
      return res(err);
    } else {
      return res.send(data);
    }
  })
});

module.exports = router;
