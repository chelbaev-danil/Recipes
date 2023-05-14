var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var nunjucks = require('nunjucks')
var session = require('express-session')

var indexRouter = require('./routes/main');
var loginRouter = require('./routes/login');
var regRouter = require('./routes/reg');
var recipeRouter = require('./routes/recipe')

var app = express();

app.engine('html', nunjucks.render)
app.set('view engine', 'html')

app.set('view', path.join(__dirname, 'view'));

nunjucks.configure('view/', {
    autoescape: true,
    express: app
})

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
// app.use(session({
//     secret:'UzbekistanForever',
//     cookie:{
//         sameSite: 'strict'
//     }
// }))

app.use('/main', indexRouter);
app.use('/login', loginRouter);
app.use('/signup', regRouter)
app.use('/recipe', recipeRouter)

module.exports = app;
