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
const Ajv = require("ajv");
const services_1 = require("../services");
const dishSchema = require("../interfaces/dish/dish.schema");
exports.dishController = {
    getAll: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const dishes = yield services_1.dishService.getAll();
        res.json(dishes);
    }),
    getOneById: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const dishId = req.params.id;
        const dish = yield services_1.dishService.getOneById(dishId);
        res.json(dish);
    }),
    insertOne: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const ajv = new Ajv({
            allErrors: true,
            removeAdditional: true,
        });
        const validate = ajv.compile(dishSchema);
        const dish = req.body;
        const isValidDish = validate(dish);
        if (isValidDish) {
            yield services_1.dishService.insertOne(dish);
            res.json(dish);
        }
        else {
            console.log(validate.errors);
            res.status(400).json(validate.errors);
        }
    }),
    updateOne: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.body) {
            return res.status(400).send({
                message: "dish content can not be empty",
            });
        }
        const dish = req.body;
        yield services_1.dishService.updateOne(dish);
        res.json(dish);
    }),
    deleteOneById: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const dishId = req.params.id;
        yield services_1.dishService.deleteOneById(dishId);
        res.sendStatus(204);
    }),
};
