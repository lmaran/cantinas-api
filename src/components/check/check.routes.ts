import { Application } from "express";
import checkController from "./check.controller";

const checkRoutes = {
    init: (app: Application) => {
        app.get("/check", checkController.getCheckPage);
    }
};

export default checkRoutes;
