import { Request, Response } from "express";
import * as sinon from "sinon";
import { expect, should } from "chai";
import { ObjectID } from "mongodb";

import userDAL from "./user.dal";
import userService from "./user.service";

describe("User DAL", () => {


    beforeEach(function() {

    });

    afterEach(() => {

    });


    it("should exist", function() {
        expect(userDAL).to.exist;
    });

    describe("getAll", () => {
        it("should return all data", async () => {
            // const expectedData = [
            //     {
            //         _id: "5a0b4d6e7f37f42883269ad6",
            //         firstName: "Joe",
            //         lastName: "Doe",
            //         age: 46
            //     },
            //     {
            //         _id: "5a0dd8937f37f42883269ade",
            //         firstName: "Joe2",
            //         lastName: "Doe2",
            //         age: 462
            //     }
            // ];

            // interface IUser {
            //     _id: ObjectID;
            //     firstName: string;
            //     lastName: string;
            //     age: number;
            // }

            const expectedData: any = [
                {
                    _id: new ObjectID("5a0b4d6e7f37f42883269ad6"),
                    firstName: "Joe",
                    lastName: "Doe",
                    age: 46
                },
                {
                    _id: new ObjectID("5a0dd8937f37f42883269ade"),
                    firstName: "Joe2",
                    lastName: "Doe2",
                    age: 462
                }
            ];

            const actualData = await userDAL.getAll();

            // convert ObjectId to string
            //  actualData.forEach((element: any) => {
            //      element._id = element._id.toString();
            //  });

            expect(actualData).deep.equal(expectedData);
            expect(actualData[0]).to.have.property("lastName");
            expect(actualData).to.have.lengthOf(2);
            // expect("aaa").to.equal("aaa");
        });
    });

    describe("getById", () => {
        it("should return data by ID", async () => {
            const expectedData: any = {
                _id: new ObjectID("5a0b4d6e7f37f42883269ad6"),
                firstName: "Joe",
                lastName: "Doe",
                age: 46
            };

            const actualData = await userDAL.getById("5a0b4d6e7f37f42883269ad6");

            // convert ObjectId to string
            //  actualData.forEach((element: any) => {
            //      element._id = element._id.toString();
            //  });

            expect(actualData).deep.equal(expectedData);
            expect(actualData).to.have.property("lastName");
            // expect("aaa").to.equal("aaa");
        });
    });


    // describe("getById", () => {
    //     it("should send json on successful retrieve", async () => {
    //         const expectedData = { name: "aaa" };
    //         userServiceStub = sinon.stub(userService, "getById").returns(expectedData);

    //          await userController.getById(<Request>req, <Response>res);

    //          sinon.assert.calledWith(res.json as sinon.SinonSpy, expectedData);

    //          // expect(res.statusCode).equal(200);
    //          userServiceStub.restore();
    //     });
    // });

});