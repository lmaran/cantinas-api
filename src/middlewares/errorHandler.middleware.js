"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const errors_1 = require("../errors");
const application_error_1 = require("../errors/application.error");
const logger_1 = require("../logger");
exports.errorHandler = (err, req, res, next) => {
    let meta;
    if (err instanceof application_error_1.ApplicationError) {
        res.status(err.status);
        meta = {
            requestId: req.ctx.requestId,
            developerMessage: err.developerMessage,
            errorType: err.name,
            logSource: "errorHandler",
            stack: err instanceof errors_1.PageNotFound ? undefined : err.stack,
        };
        returnError(res, err, meta);
    }
    if (err instanceof Error) {
        res.status(500);
        meta = {
            requestId: req.ctx && req.ctx.requestId,
            errorType: err.name,
            logSource: "errorHandler",
            stack: err.stack,
        };
        returnError(res, err, meta);
    }
    res.status(500);
    meta = {
        requestId: req.ctx.requestId,
        errorType: "UnknownError",
        logSource: "errorHandler",
    };
    err = new Error(err || "Eroare necunoscuta");
    returnError(res, err, meta);
};
function returnError(res, err, meta) {
    logger_1.default.error(err.message, meta);
    return res.json({ error: err.message });
}
