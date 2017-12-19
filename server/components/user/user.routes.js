"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const userRoutes = {
    init: (app) => {
        app.get("/v1/user", user_controller_1.default.getAll);
        app.get("/v1/user/:id", user_controller_1.default.getById);
    }
};
exports.default = userRoutes;
