var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('adminLogin');
});

router.post('/',function(req,res){
  db.queryParam("select * from tab_admin where name=? and password=?",[req.body.name,req.body.password],(err,result) =>{
      if(err){
          throw err;
      }
      if(result.length==0){
          res.send('用户名或密码错误')
      }
      else if(result!=0){
          res.redirect('/article')
      }
  })
})
module.exports = router;
