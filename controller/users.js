var appRoot = require('app-root-path');

var express = require('express');
var router = express.Router();
var db = require(appRoot + '/config/db.js');

/* GET users listing. */
router.get('/', function(req, res, next) {
  // res.send('respond with a resource');
  //res.json({message:"loremop pnerw"});
  db.query('SELECT * FROM users', (err, rows, fields)=>{
    if(err) throw err;

    res.render('pages/users', {title: 'Users | Express with EJS', data: rows});
  });


  
});

module.exports = router;