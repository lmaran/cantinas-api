import { Router } from "express";
// import { getAccessToken, requireAccessToken } from "./middlewares";
import { checkController, homeController, userController } from "./controllers";
import { entityController as dishController } from "./controllers/dish.controller";
import { entityController } from "./controllers/entity.controller";
import { entityController as warehouseController } from "./controllers/warehouse.controller";

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

// entities
// router.get("/v1/:entity(dishes|warehouses)/", entityController.getAll);
router.get("/v1/:entity/", entityController.getAll);
// router.get("/v1/warehouses/:id", warehouseController.getOneById);
// router.post("/v1/warehouses/", warehouseController.insertOne);
// router.put("/v1/warehouses/", warehouseController.updateOne);
// router.delete("/v1/warehouses/:id", warehouseController.deleteOneById);

// dish
// router.get("/v1/dishes/", dishController.getAll);
router.get("/v1/dishes/:id", dishController.getOneById);
router.post("/v1/dishes/", dishController.insertOne);
router.put("/v1/dishes/", dishController.updateOne);
router.delete("/v1/dishes/:id", dishController.deleteOneById);

// warehouse
// router.get("/v1/warehouses/", warehouseController.getAll);
router.get("/v1/warehouses/:id", warehouseController.getOneById);
router.post("/v1/warehouses/", warehouseController.insertOne);
router.put("/v1/warehouses/", warehouseController.updateOne);
router.delete("/v1/warehouses/:id", warehouseController.deleteOneById);

export default router;
