import { Application } from "express";
import setUserRoutes from "./components/user/user.routes";
// import homeRoutes from "./api/home/home.routes";
// import adminRoutes from "./api/admin/admin.routes";
const setAllRoutes = (app: Application) => {
    // API routes
    setUserRoutes(app);

    // // server-side views
    // homeRoutes(app);
    // // client-side views
    // adminRoutes(app);
};

export default setAllRoutes;