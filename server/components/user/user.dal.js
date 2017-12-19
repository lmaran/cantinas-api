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
const mongo_service_1 = require("../../util/mongo.service");
// let i = 0;
const collection = "users";
const userDal = {
    getAll: () => __awaiter(this, void 0, void 0, function* () {
        // console.log(i + ": getAll start...");
        const db = yield mongo_service_1.default.getDb();
        // console.log("getAll have a db...");
        const data = yield db.collection(collection).find().toArray();
        // console.log("getAll have data...");
        // console.log("");
        // i++;
        return data;
    }),
    // // ---------- CRUD ----------
    getById: (id) => __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_service_1.default.getDb();
        id = mongo_service_1.default.normalizedId(id);
        const data = yield db.collection(collection).findOne({ _id: id });
        return data;
    })
};
exports.default = userDal;
