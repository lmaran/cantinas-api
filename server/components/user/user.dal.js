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
const collection = "users";
const userDal = {
    getAll: () => __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_service_1.default.getDb();
        return yield db
            .collection(collection)
            .find()
            .toArray();
    }),
    findOneById: (id) => __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_service_1.default.getDb();
        id = mongo_service_1.default.normalizedId(id);
        return yield db.collection(collection).findOne({ _id: id });
    }),
    insertOne: (user) => __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_service_1.default.getDb();
        return yield db.collection(collection).insertOne(user);
    }),
    updateOne: (user) => __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_service_1.default.getDb();
        user._id = mongo_service_1.default.normalizedId(user._id);
        return yield db.collection(collection).findOneAndUpdate({ _id: user._id }, user);
    }),
    deleteOneById: (id) => __awaiter(this, void 0, void 0, function* () {
        const db = yield mongo_service_1.default.getDb();
        id = mongo_service_1.default.normalizedId(id);
        return yield db.collection(collection).deleteOne({ _id: id });
    })
};
exports.default = userDal;
