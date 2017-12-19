"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const user_controller_1 = require("./user.controller");
const userRoutes = {
    init: (app) => {
        app.get("/user", user_controller_1.default.getAll);
        app.get("/user/:id", user_controller_1.default.getById);
    }
};
exports.default = userRoutes;
