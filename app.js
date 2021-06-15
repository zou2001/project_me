var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mysql = require('mysql');

let indexRouter = require('./routes/index');
let loginRouter = require('./routes/login');
let aboutRouter = require('./routes/about');
let albumRouter = require('./routes/album');
let detailsRouter = require('./routes/details');
let leacotsRouter = require('./routes/leacots');
let whisperRouter = require('./routes/whisper');
let registerRouter = require('./routes/register');
let adminLoginRouter = require('./routes/adminLogin');
let articleRouter = require('./routes/article');
let updateArticleRouter = require('./routes/updateArticle');
let addArticleRouter = require('./routes/addArticle');
let deteleArticleRouter =require('./routes/deteleArticle');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/',indexRouter);
app.use('/login',loginRouter);
app.use('/register',registerRouter);
app.use('/about',aboutRouter);
app.use('/album',albumRouter);
app.use('/details',detailsRouter);
app.use('/leacots',leacotsRouter);
app.use('/whisper',whisperRouter);
app.use('/adminLogin',adminLoginRouter);
app.use('/article',articleRouter);
app.use('/updateArticle',updateArticleRouter);
app.use('/addArticle',addArticleRouter);
app.use('/deteleArticle',deteleArticleRouter);


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
  console.log("错误"+err);
  res.status(err.status || 500);
  res.render('error');
});


module.exports = app;
