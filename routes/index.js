var express = require('express');
var router = express.Router();
var crypto = require('crypto');
var db = require('./db');

router.get('/',function(req,res,next) {
    db.query("select * from tab_details",(err,result) =>{
        // console.log(result);
        res.render('index',{data:result});
    });
});

// /*登录信息验证*/
// router.post('/login',(req, res, next) =>{
//     var name = req.body.name;
//     var password = req.body.password;
//     var hash = crypto.createHash('md5');
//     hash.update(password);
//     password = hash.digest('hex');
//     var query = 'SELECT * FROM tab_user WHERE userName=' + 
//     mysql.escape(name)+'AND userPassword='+mysql.escape(password);
//     mysql.query(query,(err,rows) =>{
//       if(err){
//         console.log(err);
//         return;
//       }
//       var user = rows[0];
//       if(!user){
//         res.render('login',{message:'用户名或密码错误'});
//         return;
//       }
//       req.session.userSign = true;
//       req.session.userID = user.userID;
//       res.redirect('/')
//     })
//   })

module.exports = router;