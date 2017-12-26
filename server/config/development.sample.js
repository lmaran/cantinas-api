"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config = {
    port: process.env.PORT || 1416,
    mongo: {
        uri: "mongodb://localhost/cantinas-dev"
    },
    authRootUrl: process.env.AUTH_ROOT_URL || "http://cantinas.ro"
};
exports.default = config;
