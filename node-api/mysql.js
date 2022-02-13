const mysql = require('mysql');

var pool = mysql.createPool({
    "user": process.env.MYSQL_USER,
    "localhost": process.env.MYSQL_HOST,
    "database": process.env.MYSQL_DATABASE,
    "port": process.env.MYSQL_PORT

});

exports.pool = pool;