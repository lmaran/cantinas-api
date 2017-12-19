"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const home_controller_1 = require("./home.controller");
const homeRoutes = {
    init: (app) => {
        app.get("/", home_controller_1.default.getHomePage);
    }
};
exports.default = homeRoutes;
