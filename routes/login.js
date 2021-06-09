var express = require('express');
var router = express.Router();
var mysql = require('mysql')
var db = require('./db');

/* 登录页 */
router.get('/', function(req, res, next) {
  res.render('login', {message:''});
});

module.exports = router;
