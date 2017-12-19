"use strict";
// process.env.NODE_ENV = process.env.NODE_ENV || "development";
Object.defineProperty(exports, "__esModule", { value: true });
const _ = require("lodash");
const path = require("path");
const development_1 = require("./development");
const staging_1 = require("./staging");
const production_1 = require("./production");
const testing_1 = require("./testing");
const envConfig = {
    development: development_1.default,
    staging: staging_1.default,
    production: production_1.default,
    test: testing_1.default
};
// All configurations will extend these options
// ============================================
const common = {
    env: process.env.NODE_ENV || "development",
    mongo: {
        options: {}
    },
    port: process.env.PORT || 1416,
    rollbarToken: "c40dd41c292340419923230eed1d0d61",
    root: path.normalize(__dirname + "/../../..") // 3 folders back from the current folder
};
const config = _.merge(common, envConfig[common.env]);
exports.default = config;
