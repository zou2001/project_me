var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

let loginRouter = require('./routes/login');
let homeRouter = require('./routes/home');
let aboutRouter = require('./routes/about');
let albumRouter = require('./routes/album');
let detailsRouter = require('./routes/details');
let leacotsRouter = require('./routes/leacots');
let whisperRouter = require('./routes/whisper');
let registerRouter = require('./routes/register');
let adminLoginRouter = require('./routes/adminLogin');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',loginRouter);
app.use('/register',registerRouter);
app.use('/home', homeRouter);
app.use('/about',aboutRouter);
app.use('/album',albumRouter);
app.use('/details',detailsRouter);
app.use('/leacots',leacotsRouter);
app.use('/whisper',whisperRouter);
app.use('/adminLogin',adminLoginRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
