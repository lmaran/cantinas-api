import { expect } from "chai";
import * as sinon from "sinon";

import userService from "./user.service";
import userDAL from "./user.dal"; // for stub

describe ("User Service", () => {
    // Modules are cached after the first time they are loaded, so you can just
    // load them first in your test file and stub them using a library like sinon.
    // https://stackoverflow.com/a/42498606

    let userDALStub: any;
    // let userDALStub = sinon.stub(userDAL, "getAll");

    beforeEach(() => {
        // userDALStub = sinon.stub(userDAL, "getAll");
        // userDALStub.returns([{ name: "user 1" }]);
    });

    afterEach(() => {
        // userDALStub.restore();
    });

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

        // it("should return data 2", async () => {
        //     const expectedData = [{ name: "user 2" }];
        //     userDALStub.returns(expectedData);
        //     const users = await userService.getAll();
        //     expect(users).deep.equal(expectedData);
        // });
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

        // it("should return data 2", async () => {
        //     const expectedData = [{ name: "user 2" }];
        //     userDALStub.returns(expectedData);
        //     const users = await userService.getAll();
        //     expect(users).deep.equal(expectedData);
        // });
    });



    // demo only
    it("responds with matching records", async function() {

        // By default, mocha tests have a 2 second timeout (which means that the test needs to be completed in 2 seconds).
        // see how to increase this limit here: https://stackoverflow.com/a/40902554
        this.timeout(5000); // this test can take up to 5 seconds
        const users = await userService.getPromisTest("xxx");
        // users.should.have.length(3);
        expect(users).to.equal("Hello, xxx");
    });

});
