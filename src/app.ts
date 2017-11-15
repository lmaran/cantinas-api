/**
 * Node.js Best Practice -> Separate Express 'app' and 'server'
 * https://github.com/i0natan/nodebestpractices#-14-separate-express-app-and-server
 * Inspiration: Express App Generator (https://expressjs.com/en/starter/generator.html)
 */

import * as express from "express";
import * as path from "path";
// import config from "./src/config/environment";
import setAllRoutes from "./routes";

const app: express.Application = express();

// var express = require('express');
// var path = require('path');

// var index = require('./routes/index');
// var users = require('./routes/users');

// var app = express();

// app.use('/', index);
// app.use('/users', users);

setAllRoutes(app);

// // catch 404 and forward to error handler
// app.use(function (req, res, next) {
//   var err = new Error('Not Found');
//   err.status = 404;
//   next(err);
// });

// // error handler
// app.use(function (err, req, res, next) {
//   // set locals, only providing error in development
//   res.locals.message = err.message;
//   res.locals.error = req.app.get('env') === 'development' ? err : {};

//   // render the error page
//   res.status(err.status || 500);
//   // res.render('error');
//   res.send('err');
// });

export default app;