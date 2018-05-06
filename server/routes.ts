// import { Router } from "express";

// import userRoutes from "./components/user/user.routes";
// import homeRoutes from "./components/home/home.routes";
// import checkRoutes from "./components/check/check.routes";

// const router = Router();

// router.use("/v1/users", userRoutes);
// router.use("/check", checkRoutes);
// router.use("", homeRoutes);

// export default router;

import { Router } from "express";
// import { getAccessToken, requireAccessToken } from "./middlewares";

import { checkController, homeController, userController,
    // contactController, authorizeController, approveController, tokenController,
    // userinfoController, homepageController
} from "./controllers";

const router = Router();

// check
router.get("/api/check", checkController.getCheckPage);

// home
router.get("/api/", homeController.getHomePage);

// user
router.get("/api/v1/users/", userController.getAll);
router.get("/api/v1/users/:id", userController.getOneById);
router.post("/api/v1/users/", userController.insertOne);
router.put("/api/v1/users/", userController.updateOne);
router.delete("/api/v1/users/:id", userController.deleteOneById);

// // contact
// router.get("/contact", contactController.getContactPage);

// // authorize
// router.get("/authorize", authorizeController.getAuthorize);

// // approve
// router.post("/approve", approveController.approve);

// // token
// router.post("/token", tokenController.getToken);
// router.post("/revoke", tokenController.revokeToken);

// // userinfo
// router.get("/userinfo", getAccessToken, requireAccessToken, userinfoController.getUserinfo);
// router.post("/userinfo", getAccessToken, requireAccessToken, userinfoController.getUserinfo);

// // homepage
// router.get("/homepage", homepageController.getHomepage);
// router.post("/homepage", homepageController.getHomepage);

export default router;
