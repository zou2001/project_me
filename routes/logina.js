var express = require('express');
var router = express.Router();
var db = require('./db');

router.get('/',function(req,res,next){
    res.render('logina');
})


router.post('/',function(req,res){
    db.queryParam("select * from tab_user where userName=? and userPassword=?",[req.body.userName,req.body.userPassword],(err,result) =>{
        if(err){
            throw err;
        }
        if(result==0){
            res.send("用户名或密码错误");
        }
        else if(result!=0){
            res.redirect('/')
        }
    })
})



module.exports= router;

