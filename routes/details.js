var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
router.get('/', function(req, res, next) {
  console.log(req.query)
  console.log(req.params);
  db.queryParam("select * from tab_details where id=?",[req.query.id],(err,result)=>{
    res.render('details',{data:result[0]})
  })
});


module.exports = router;
