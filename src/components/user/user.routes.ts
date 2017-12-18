import { Application } from "express";
import userController from "./user.controller";

const userRoutes = {
    init: (app: Application) => {
        app.get("/api/user", userController.getAll);
        app.get("/api/user/:id", userController.getById);
    }
};

export default userRoutes;
