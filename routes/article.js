var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
/**展示数据 */
router.get('/', function(req, res, next) {
  db.query("select * from tab_details ",(err,result) =>{
    // console.log(result);
    res.render('article',{data:result});
});
});
/**模糊查询文章 */
router.post('/',(req,res) => {
  db.queryParam("select * from tab_details where title like ? ",["%"+req.body.search+"%"],(err,result) => {
    res.render('article',{data:result});
  })
})





module.exports = router;