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
const sinon = require("sinon");
const user_service_1 = require("./user.service");
const user_dal_1 = require("./user.dal");
describe("User Service", () => {
    let userDALStub;
    it("should exist", function () {
        chai_1.expect(user_service_1.default).to.exist;
    });
    describe("getAll", () => {
        beforeEach(() => {
            userDALStub = sinon.stub(user_dal_1.default, "getAll");
        });
        afterEach(() => {
            userDALStub.restore();
        });
        it("should return data 1", () => __awaiter(this, void 0, void 0, function* () {
            const expectedData = [{ name: "user 1" }];
            userDALStub.returns(expectedData);
            const users = yield user_service_1.default.getAll();
            chai_1.expect(users).deep.equal(expectedData);
        }));
    });
    describe("getById", () => {
        beforeEach(() => {
            userDALStub = sinon.stub(user_dal_1.default, "getById");
        });
        afterEach(() => {
            userDALStub.restore();
        });
        it("should return data 1", () => __awaiter(this, void 0, void 0, function* () {
            const expectedData = { name: "user 1" };
            userDALStub.returns(expectedData);
            const users = yield user_service_1.default.getById(1);
            chai_1.expect(users).deep.equal(expectedData);
        }));
    });
});
