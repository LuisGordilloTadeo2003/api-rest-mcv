var createError = require('http-errors');

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var bicicletasAPIRouter = require('./routes/api/bicicleta');
var app = express();

// Configuracion en este caso de las vistas y el motor de las vistas(pug)

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

// Middlewares
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// Rutas
app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/api/bicicleta', bicicletasAPIRouter);
// Manejador de errores

app.use(function (req, res, next) {
  next(createError(404));
});

// middleware para el manejo de errores
app.use(function (err, req, res, next) {

  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // Rendereriza la pagina de error
  res.status(err.status || 500);
  res.render('error');
});

//export del server
module.exports = app;