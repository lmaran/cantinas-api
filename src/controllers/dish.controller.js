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
const dish_service_1 = require("../services/dish.service");
const entitySchema = require("../interfaces/dish/dish.schema");
exports.entityController = {
    getAll: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const entities = yield dish_service_1.entityService.getAll();
        res.json(entities);
    }),
    getOneById: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const entityId = req.params.id;
        const entity = yield dish_service_1.entityService.getOneById(entityId);
        res.json(entity);
    }),
    insertOne: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const ajv = new Ajv({
            allErrors: true,
            removeAdditional: true,
        });
        const validate = ajv.compile(entitySchema);
        const entity = req.body;
        const isValidEntity = validate(entity);
        if (isValidEntity) {
            yield dish_service_1.entityService.insertOne(entity);
            res.json(entity);
        }
        else {
            console.log(validate.errors);
            res.status(400).json(validate.errors);
        }
    }),
    updateOne: (req, res) => __awaiter(this, void 0, void 0, function* () {
        if (!req.body) {
            return res.status(400).send({
                message: "entity content can not be empty",
            });
        }
        const entity = req.body;
        yield dish_service_1.entityService.updateOne(entity);
        res.json(entity);
    }),
    deleteOneById: (req, res) => __awaiter(this, void 0, void 0, function* () {
        const entityId = req.params.id;
        yield dish_service_1.entityService.deleteOneById(entityId);
        res.sendStatus(204);
    }),
};
