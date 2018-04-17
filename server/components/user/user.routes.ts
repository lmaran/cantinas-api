import { Router } from "express";
import userController from "./user.controller";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getOneById);
router.post("/", userController.insertOne);
router.put("/", userController.updateOne);
router.delete("/:id", userController.deleteOneById);

export default router;
