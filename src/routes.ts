import { Router } from "express";
// import { getAccessToken, requireAccessToken } from "./middlewares";

import {
    checkController,
    homeController,
    userController,
    // contactController, authorizeController, approveController, tokenController,
    // userinfoController, homepageController
} from "./controllers";

const router = Router();

// check
router.get("/check", checkController.getCheckPage);

// home
router.get("/", homeController.getHomePage);

// user
router.get("/v1/users/", userController.getAll);
router.get("/v1/users/:id", userController.getOneById);
router.post("/v1/users/", userController.insertOne);
router.put("/v1/users/", userController.updateOne);
router.delete("/v1/users/:id", userController.deleteOneById);

export default router;
