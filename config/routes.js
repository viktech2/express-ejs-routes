var appRoot = require('app-root-path');
var indexRouter = require(appRoot + '/controller/index');
var usersRouter = require(appRoot + '/controller/users');

module.exports = function(app){
    
    app.use('/', indexRouter);
    app.use('/users', usersRouter);

}