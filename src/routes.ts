import { Router } from "express";
import userRoutes from "./components/user/user.routes";

const router = Router();

router.use("/user", userRoutes);

export default router;