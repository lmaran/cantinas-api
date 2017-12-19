"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const check_controller_1 = require("./check.controller");
const checkRoutes = {
    init: (app) => {
        app.get("/check", check_controller_1.default.getCheckPage);
    }
};
exports.default = checkRoutes;
