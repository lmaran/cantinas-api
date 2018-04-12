"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = express_1.Router();
router.get("/", user_controller_1.default.getAll);
router.get("/:id", user_controller_1.default.getOneById);
router.post("/", user_controller_1.default.insertOne);
router.delete("/:id", user_controller_1.default.deleteOneById);
exports.default = router;