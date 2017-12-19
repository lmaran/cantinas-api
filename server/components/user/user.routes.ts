import { Application } from "express";
import userController from "./user.controller";

const userRoutes = {
    init: (app: Application) => {
        app.get("/v1/user", userController.getAll);
        app.get("/v1/user/:id", userController.getById);
    }
};

export default userRoutes;
