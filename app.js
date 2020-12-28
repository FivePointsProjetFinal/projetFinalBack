var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var mongoose = require('mongoose');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var fournisseurRouter = require('./routes/fournisseur');
var clientRouter = require('./routes/client');
var produitsRouter = require('./routes/produits');
var categorieRouter = require('./routes/categorie');
var packRouter = require('./routes/pack');
var app = express();



app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/fournisseur', fournisseurRouter);
app.use('/client', clientRouter);
app.use('/produits', produitsRouter);
app.use('/categorie', categorieRouter);
app.use('/pack', packRouter);


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
  res.json(err);
});
mongoose.connect('mongodb://localhost:27017/mybase', {useNewUrlParser: true, useUnifiedTopology: true}).then(() => {
    console.log("connected to database");
    app.listen(3000)
}).catch(err => {
    console.log(err);np
  });  


module.exports = app;
