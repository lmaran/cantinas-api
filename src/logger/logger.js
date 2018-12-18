"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { createLogger, format, transports } = require("winston");
const config_1 = require("../config");
const winston_rollbar_transport2_1 = require("./winston-rollbar.transport2");
const { Loggly } = require("./winston-loggly.transport2");
const rollbarOptions = {
    accessToken: config_1.default.rollbarToken,
    reportLevel: "warning",
    environment: config_1.default.env,
    scrubFields: ["password", "oldPassword", "newPassword", "hashedPassword", "salt"],
};
const logglyOptions = {
    token: config_1.default.logglyToken,
    subdomain: config_1.default.logglySubdomain,
    tags: ["cantinas", config_1.default.env],
    json: true,
};
const logger = createLogger({});
if (config_1.default.env === "production" || config_1.default.env === "staging") {
    logger.add(new Loggly(logglyOptions));
    logger.add(new winston_rollbar_transport2_1.Rollbar({ rollbarConfig: rollbarOptions }));
}
else {
    const formatterFunc = require("./winston-console.formatter").formatterFunc;
    const consoleOptions = {
        level: "debug",
        formatter: formatterFunc,
    };
    logger.add(new transports.Console(consoleOptions));
}
exports.default = logger;
