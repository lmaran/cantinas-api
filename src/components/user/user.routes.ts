import { Application } from "express";
import * as path from "path";
import userController from "./user.controller";

// const routes = (app: Application) => {
//     app.get("/api/user", userController.getAll);
// };

const userRoutes = {
    attachTo: (app: Application) => {
        // API routes
        app.get("/api/user", userController.getAll);
        app.get("/api/user/:id", userController.getById);
    }
};

export default userRoutes;