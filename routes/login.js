var express = require('express');
var router = express.Router();
var mysql = require('mysql');

let conn = require('./../util/conn');
const Blog = require('./../bean/blog');

/* 登录页 */
router.get('/', function(req, res, next) {
  res.render('login');
});

/**
*登录验证功能
*/
router.post('/login',function(req,res){
  var authorName = req.body.authorName
  var authorPassword = req.body.authorPassword
  var querySql = "select authorName,authorPassword from author where authorName='"+authorName+"' and authorPassword='"+authorPassword+"'";
  connection.query(querySql,function(err,result){
      if (err) throw err;
      console.log("!!!",result)
      if(result.length==0){
          res.render('err')
      }else{res.render('home')}
  })

});


module.exports = router;
