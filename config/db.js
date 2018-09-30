const mysql = require('mysql');
const env = require('node-env-file');
env('.env');

const conn = mysql.createConnection({
    host     : process.env.DBHOST,
    user     : process.env.DBUSER,
    password : process.env.DBPASS,
    database : process.env.DBNAME
});

conn.connect(err=>{
    if(err) throw err;
});

module.exports = conn;