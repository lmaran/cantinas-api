import { Application } from "express";
import * as path from "path";
import userController from "./user.controller";

const routes = (app: Application) => {
    app.get("/api/user", userController.getAll);
};

export default routes;