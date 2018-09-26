var createError = require('http-errors');
var express = require('express');
var mongoose = require('mongoose');
var path = require('path');
var multer = require('multer'); //for image upload
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const passport = require('passport');

var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var signupRouter = require('./routes/signup');
var menteeRouter = require('./routes/mentee');
var mentorRouter = require('./routes/mentor');
var resources = require('./routes/resources');
var challenges = require('./routes/challenges');

//Passport config
require('./config/passport')(passport);


//Map global promise - get rid of warning
mongoose.Promise = global.Promise;

//for mongo connection establishing
mongoose.connect('mongodb://localhost/edupro');
var db = mongoose.connection
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function () {
    console.log("connection established to db");
});

// require('/model/user');
// const User = mongoose.model('User')


var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
var serveIndex = require('serve-index'); //an alternative of path
var body_parser = require('body-parser');


app.use('/', indexRouter);
app.use('/login',loginRouter);
app.use('/signup',signupRouter);
app.use('/mentee',menteeRouter);
app.use('/mentor',mentorRouter);
app.use('/resources',resources);
app.use('/challenges',challenges);
app.use('/resources',resources);

//set static files(css or js or imgs)
app.use(express.static(__dirname + "/public"));
app.use('/uploads', serveIndex('public/uploads'));

app.use(body_parser.json({limit:'10mb'}));
app.use(body_parser.urlencoded({extended:true}));
// app.use(formidable());


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
