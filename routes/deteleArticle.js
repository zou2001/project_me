var express = require('express');
var router = express.Router();
var db = require('./db');

/* GET users listing. */
/**删除文章 */
router.get('/', function (req, res, next) {
    db.queryParam("delete from tab_details where id ="+req.query.id+"", (err, result) => {
        res.redirect('article')
    });
});
module.exports = router;