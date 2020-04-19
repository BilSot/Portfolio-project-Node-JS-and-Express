var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

var indexRouter = require('./routes/index');
var aboutRouter = require('./routes/about');
var projectRouter = require('./routes/project');
const {profile} = require('./data/data.json');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({extended: false}));
app.use(cookieParser());
app.use('/static', express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/about', aboutRouter);
app.use('/project', projectRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
    next(createError(404));
});

// error handler
app.use(function (err, req, res, next) {
    res.locals.error = err;
    err.status = err.status ? err.status : 500;
    res.status(err.status || 500);
    if(err.status === 404) {
        err.message = 'The page you\'re looking for doesn\'t exist';
    }else if(err.status === 500){
        err.message = 'Unexpected error :( Try again later';
    }
    res.locals.message = err.message;
    res.render('error', {profile});
    console.error(err.stack);
});

module.exports = app;
