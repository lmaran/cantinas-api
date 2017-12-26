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
const chai_1 = require("chai");
const mongodb_1 = require("mongodb");
const user_dal_1 = require("./user.dal");
describe("User DAL", () => {
    describe("getAll", () => {
        it("should return all data", () => __awaiter(this, void 0, void 0, function* () {
            const expectedData = [
                {
                    _id: new mongodb_1.ObjectID("5a0b4d6e7f37f42883269ad6"),
                    firstName: "Joe",
                    lastName: "Doe",
                    age: 46
                },
                {
                    _id: new mongodb_1.ObjectID("5a0dd8937f37f42883269ade"),
                    firstName: "Joe2",
                    lastName: "Doe2",
                    age: 462
                }
            ];
            const actualData = yield user_dal_1.default.getAll();
            chai_1.expect(actualData).deep.equal(expectedData);
            chai_1.expect(actualData[0]).to.have.property("lastName");
            chai_1.expect(actualData).to.have.lengthOf(2);
        }));
    });
    describe("getById", () => {
        it("should return data by ID", () => __awaiter(this, void 0, void 0, function* () {
            const expectedData = {
                _id: new mongodb_1.ObjectID("5a0b4d6e7f37f42883269ad6"),
                firstName: "Joe",
                lastName: "Doe",
                age: 46
            };
            const actualData = yield user_dal_1.default.getById("5a0b4d6e7f37f42883269ad6");
            chai_1.expect(actualData).deep.equal(expectedData);
            chai_1.expect(actualData).to.have.property("lastName");
        }));
    });
});
