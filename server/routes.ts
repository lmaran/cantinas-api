import { Router } from "express";

import userRoutes from "./components/user/user.routes";
import homeRoutes from "./components/home/home.routes";
import checkRoutes from "./components/check/check.routes";

const router = Router();

router.use("/v1/users", userRoutes);
router.use("/check", checkRoutes);
router.use("", homeRoutes);

export default router;