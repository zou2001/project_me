var mysql = require('mysql');
const router = require('./login');
var db = {};

/**连接数据库 */
db.query = function(sql,callback){
var database = mysql.createConnection({
    host    : 'localhost',
    user    : 'root',
    password: '123456',
    database: 'project_me',
    port    : 3306,
    debug:true
});
database.query(sql,(err,results) =>{
    callback(err,results);
});
database.end();
};
/**操作文章表 */
db.queryParam = function(sql,param,callback){
    var database = mysql.createConnection({
        host    : 'localhost',
        user    : 'root',
        password: '123456',
        database: 'project_me',
        port    : 3306,
        debug:true
    });
    database.query(sql,param,(err,results) =>{
        callback(err,results);
    });
    database.end();
    };


module.exports = db;