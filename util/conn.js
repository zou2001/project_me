let mysql = require('mysql')

let conn = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"zwz20010611",
    database:"blog",  
    port:"3306"
});
module.exports = conn;