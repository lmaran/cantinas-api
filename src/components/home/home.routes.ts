import { Application } from "express";
import homeController from "./home.controller";

const homeRoutes = {
    init: (app: Application) => {
        app.get("/", homeController.getHomePage);
    }
};

export default homeRoutes;
