import * as express from "express";
import * as path from "path";
import allRoutes from "./routes";
import { setContext, errorHandler, httpLogHandler, catch404 } from "./middlewares";

import * as url from "url";
import * as bodyParser from "body-parser";

const app: express.Application = express();

// https://expressjs.com/en/guide/behind-proxies.html
app.enable("trust proxy"); // allow express to set req.ip

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true })); // support form-encoded bodies (for the token endpoint)
app.use(express.static(path.join(__dirname, "public")));

app.use(setContext); // adds requestId, tokenCode and other properties to the request object

app.use(httpLogHandler);

app.use("/api", allRoutes);

// catch 404 and forward to error handler
app.use(catch404);

app.use(errorHandler);

// "uncaughtException" and "unhandledRejection" are caught in server.ts

export default app;
