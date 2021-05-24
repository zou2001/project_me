var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let conn = require('./../util/conn');
const Blog = require('./../bean/blog');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

/**
* 注册功能
*/
router.post('/register',function(req, res, next){
  let blog = new Blog(req.body.username, req.body.password, req.body.phone_number, req.body.email);
  connection.query("insert into author(authorNname, authorPassword, authorPhone, authorEmail ) value(?,?,?,?)",[blog.username, blog.password, blog.phone_number, blog.email]);
      res.render('home')

})

module.exports = router;
