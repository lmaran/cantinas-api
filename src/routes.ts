import { Application } from "express";
import userRoutes from "./components/user/user.routes";
// import homeRoutes from "./api/home/home.routes";
// import adminRoutes from "./api/admin/admin.routes";
// const setAllRoutes = (app: Application) => {
//     // API routes
//     setUserRoutes(app);

//     // // server-side views
//     // homeRoutes(app);
//     // // client-side views
//     // adminRoutes(app);
// };

const allRoutes = {
    attachTo: (app: Application) => {
        // API routes
        userRoutes.attachTo(app);

        // // server-side views
        // homeRoutes(app);
        // // client-side views
        // adminRoutes(app);
    }
};

export default allRoutes;