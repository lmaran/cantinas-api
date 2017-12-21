import { expect } from "chai";
import * as sinon from "sinon";

import userService from "./user.service";
import userDAL from "./user.dal"; // for stub

describe ("User Service", () => {
    // Modules are cached after the first time they are loaded, so you can just
    // load them first in your test file and stub them using a library like sinon.
    // https://stackoverflow.com/a/42498606

    let userDALStub: any;

    it("should exist", function() {
        expect(userService).to.exist;
    });

    describe("getAll", () => {
        beforeEach(() => {
            userDALStub = sinon.stub(userDAL, "getAll");
        });

        afterEach(() => {
            userDALStub.restore();
        });

        it("should return data 1", async () => {
            const expectedData = [{ name: "user 1" }];
            userDALStub.returns(expectedData);
            const users = await userService.getAll();
            expect(users).deep.equal(expectedData);
        });

    });

    describe("getById", () => {
        beforeEach(() => {
            userDALStub = sinon.stub(userDAL, "getById");
        });

        afterEach(() => {
            userDALStub.restore();
        });

        it("should return data 1", async () => {
            const expectedData = { name: "user 1" };
            userDALStub.returns(expectedData);
            const users = await userService.getById(1);
            expect(users).deep.equal(expectedData);
        });

    });

});
