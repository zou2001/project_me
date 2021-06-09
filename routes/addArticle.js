var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.render('addArticle');
});

router.post('/',(req,res) => {
  db.queryParam("insert into tab_details (title,details,article,create_time,updata_time) value(?,?,?,?,?)",[req.body.title,req.body.details,req.body.article,new Date(),new Date()],(err,result)=>{
    if(err){
      console.log(err)
    }
    res.redirect('/article');
  })
});

module.exports = router;
