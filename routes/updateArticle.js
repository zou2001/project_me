var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
router.get('/:id', function(req, res, next) {
  console.log(req.params);
  db.queryParam("select * from tab_details where id =?",[req.params.id],(err,result) =>{
    res.render('updateArticle',{obj:result[0]});
  })
});

router.post('/',(req,res) =>{
  db.queryParam("update tab_details set title=?,details=?,picture=?,updata_time=?,article=? where id ="+req.body.id+"",[req.body.title,req.body.details,req.body.picture,new Date(),req.body.article],(err,result) =>{
    res.redirect('/article')
  })
})

module.exports = router;
