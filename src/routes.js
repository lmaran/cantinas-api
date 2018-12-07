"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const controllers_1 = require("./controllers");
const dish_controller_1 = require("./controllers/dish.controller");
const entity_controller_1 = require("./controllers/entity.controller");
const warehouse_controller_1 = require("./controllers/warehouse.controller");
const router = express_1.Router();
router.get("/check", controllers_1.checkController.getCheckPage);
router.get("/", controllers_1.homeController.getHomePage);
router.get("/v1/users/", controllers_1.userController.getAll);
router.get("/v1/users/:id", controllers_1.userController.getOneById);
router.post("/v1/users/", controllers_1.userController.insertOne);
router.put("/v1/users/", controllers_1.userController.updateOne);
router.delete("/v1/users/:id", controllers_1.userController.deleteOneById);
router.get("/v1/entities/", entity_controller_1.entityController.getAll);
router.get("/v1/entities/:id", entity_controller_1.entityController.getOneById);
router.post("/v1/entities/", entity_controller_1.entityController.insertOne);
router.put("/v1/entities/", entity_controller_1.entityController.updateOne);
router.delete("/v1/entities/:id", entity_controller_1.entityController.deleteOneById);
router.get("/v1/:entity/", entity_controller_1.entityController.getAllItems);
router.get("/v1/dishes/:id", dish_controller_1.entityController.getOneById);
router.post("/v1/dishes/", dish_controller_1.entityController.insertOne);
router.put("/v1/dishes/", dish_controller_1.entityController.updateOne);
router.delete("/v1/dishes/:id", dish_controller_1.entityController.deleteOneById);
router.get("/v1/warehouses/:id", warehouse_controller_1.entityController.getOneById);
router.post("/v1/warehouses/", warehouse_controller_1.entityController.insertOne);
router.put("/v1/warehouses/", warehouse_controller_1.entityController.updateOne);
router.delete("/v1/warehouses/:id", warehouse_controller_1.entityController.deleteOneById);
exports.default = router;