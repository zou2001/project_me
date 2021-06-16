var express = require('express');
var router = express.Router();
var mysql = require('mysql');
var crypto = require('crypto')
var db = require('./db');
// const { call } = require('../app');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('register');
});

/**
* 注册功能
*/
router.post('/',function(req, res, next){
  db.queryParam("insert into tab_user (userName,userPassword,userEmail)values('"+req.body.userName+"','"+req.body.userPassword+"','"+req.body.userEmail+"')",(err,result)=>{
    if(err){
     console.log(err);
    }else{
      res.redirect('/logina')
    }
  })

})

module.exports = router;
