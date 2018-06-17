import { Router } from "express";
// import { getAccessToken, requireAccessToken } from "./middlewares";
import { checkController, dishController, homeController, userController } from "./controllers";

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

// dish
router.get("/v1/dishes/", dishController.getAll);
router.get("/v1/dishes/:id", dishController.getOneById);
router.post("/v1/dishes/", dishController.insertOne);
router.put("/v1/dishes/", dishController.updateOne);
router.delete("/v1/dishes/:id", dishController.deleteOneById);

export default router;
