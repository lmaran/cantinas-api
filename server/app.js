"use strict";
/**
 * Node.js Best Practice -> Separate Express 'app' and 'server'
 * https://github.com/i0natan/nodebestpractices#-14-separate-express-app-and-server
 * Inspiration: Express App Generator (https://expressjs.com/en/starter/generator.html)
 */
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
// import config from "./src/config/environment";
const routes_1 = require("./routes");
// const expressApp = {
//     getInstance: () => {
//         const app: express.Application = express();
//         allRoutes.init(app);
//         return app;
//     }
// };
const app = express();
// allRoutes.init(app);
app.use("/api", routes_1.default);
// const app: express.Application = express();
// var express = require('express');
// var path = require('path');
// var index = require('./routes/index');
// var users = require('./routes/users');
// var app = express();
// app.use('/', index);
// app.use('/users', users);
// allRoutes.init(app);
// app.use("/api", allRoutes);
// // catch 404 and forward to error handler
// app.use(function (req, res: express.Response, next) {
//   const err = new Error("Not Found");
//   res.status(404);
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
exports.default = app;
