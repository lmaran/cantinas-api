"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_routes_1 = require("./components/user/user.routes");
const home_routes_1 = require("./components/home/home.routes");
const check_routes_1 = require("./components/check/check.routes");
const allRoutes = {
    init: (app) => {
        // API routes
        user_routes_1.default.init(app); // => /api
        // View routes
        home_routes_1.default.init(app); // => /
        check_routes_1.default.init(app); // => /check
        // app.get("/", (req, res) => {
        //     res.send("Hello World");
        // });
    }
};
exports.default = allRoutes;
