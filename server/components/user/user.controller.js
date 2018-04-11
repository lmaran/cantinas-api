"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_service_1 = require("./user.service");
const userController = {
    getAll: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const users = yield user_service_1.default.getAll();
        res.json(users);
    }),
    getById: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        const user = yield user_service_1.default.getById(userId);
        res.json(user);
    }),
    create: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.body) {
            return res.status(400).send({
                message: "Note content can not be empty"
            });
        }
        const user = req.body;
        yield user_service_1.default.create(user);
        res.json(user);
    })
};
exports.default = userController;
