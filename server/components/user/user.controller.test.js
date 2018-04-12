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
const sinon = require("sinon");
const chai_1 = require("chai");
const user_controller_1 = require("./user.controller");
const user_service_1 = require("./user.service");
let req;
let res;
describe("User Controller", () => {
    let userServiceStub;
    beforeEach(function () {
        req = {
            params: {
                id: 1234
            }
        };
        res = {
            json: sinon.spy(),
            status: (x) => {
                res.statusCode = x;
                return res;
            }
        };
    });
    afterEach(() => {
    });
    it("should exist", function () {
        chai_1.expect(user_controller_1.default).to.exist;
    });
    describe("getAll", () => {
        it("should send json on successful retrieve", () => __awaiter(this, void 0, void 0, function* () {
            const expectedData = [{ name: "aaa" }];
            userServiceStub = sinon.stub(user_service_1.default, "getAll").returns(expectedData);
            yield user_controller_1.default.getAll(req, res);
            const xxx = res.json;
            sinon.assert.calledWith(res.json, [{ name: "aaa" }]);
            userServiceStub.restore();
        }));
    });
    describe("getById", () => {
        it("should send json on successful retrieve", () => __awaiter(this, void 0, void 0, function* () {
            const expectedData = { name: "aaa" };
            userServiceStub = sinon
                .stub(user_service_1.default, "getOneById")
                .returns(expectedData);
            yield user_controller_1.default.getOneById(req, res);
            sinon.assert.calledWith(res.json, expectedData);
            userServiceStub.restore();
        }));
    });
});
