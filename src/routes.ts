import { Application } from "express";
import userRoutes from "./components/user/user.routes";
import homeRoutes from "./components/home/home.routes";
import checkRoutes from "./components/check/check.routes";

const allRoutes = {
    init: (app: Application) => {
        // API routes
        userRoutes.init(app); // => /api

        // View routes
        homeRoutes.init(app); // => /
        checkRoutes.init(app); // => /check

        // app.get("/", (req, res) => {
        //     res.send("Hello World");
        // });
    }
};

export default allRoutes;