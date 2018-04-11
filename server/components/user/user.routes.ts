import { Router } from "express";
import userController from "./user.controller";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getById);
router.post("/", userController.create);

export default router;