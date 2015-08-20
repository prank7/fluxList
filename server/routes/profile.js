var express = require('express');
var auth = require('../auth/auth.service');
var User = require('../models/users');
var router = express.Router();

// GET Profile page
router.get('/', function(req, res){
  res.render('profile', {title: "Profile"});
});

module.exports = router;
