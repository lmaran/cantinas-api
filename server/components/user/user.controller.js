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
    getOneById: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        const user = yield user_service_1.default.getOneById(userId);
        res.json(user);
    }),
    insertOne: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.body) {
            return res.status(400).send({
                message: "User content can not be empty"
            });
        }
        const user = req.body;
        yield user_service_1.default.insertOne(user);
        res.json(user);
    }),
    updateOne: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.body) {
            return res.status(400).send({
                message: "User content can not be empty"
            });
        }
        const user = req.body;
        yield user_service_1.default.updateOne(user);
        res.json(user);
    }),
    deleteOneById: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const userId = req.params.id;
        yield user_service_1.default.deleteOneById(userId);
        res.sendStatus(204);
    })
};
exports.default = userController;
