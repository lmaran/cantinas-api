/**
 * Node.js Best Practice -> Separate Express 'app' and 'server'
 * https://github.com/i0natan/nodebestpractices#-14-separate-express-app-and-server
 */

import * as express from "express";
import config from "./config";
import app from "./app";

const server = app.listen(config.port, () => {
    console.log(`Express server listening on port ${config.port} in ${config.env} mode`);
});

export default server;