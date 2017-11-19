import { expect } from "chai";
import * as sinon from "sinon";

import mongoService from "./mongo.service";
import config from "../config";
import { ObjectID, Db } from "mongodb";

describe("Mongo service", function () {

    let db: Db;

    it("should connect to the database (for correct uri)", async () => {
        config.mongo.uri = "mongodb://localhost/cantinas-dev";
        mongoService.removeDbFromCache();
        db = await mongoService.getDb();

        const collections = await db.listCollections({name: "users"}).toArray();
        expect(collections[0].name).equal("users");
        expect(db.databaseName).equal("cantinas-dev");
    });

    it("should respond with an error object (for incorrect uri)", async () => {
        config.mongo.uri = "mongodb3://localhost/cantinas-dev3";
        mongoService.removeDbFromCache();
        try {
            db = await mongoService.getDb();
        } catch (err) {
            expect(err).to.be.not.null;
            expect(err.message).equal("Error: invalid schema, expected mongodb");
        }
    });

    it("should respond with an error object (for missing uri)", async () => {
        config.mongo.uri = undefined;
        mongoService.removeDbFromCache();
        try {
            db = await mongoService.getDb();
        } catch (err) {
            expect(err).to.be.not.null;
            expect(err.message).equal("Error: Nu este definit un connection string pentru Mongo.");
        }
    });

    it("should respond with a cached DB instance (for correct uri)", async () => {
        config.mongo.uri = "mongodb://localhost/cantinas-dev";
        mongoService.removeDbFromCache();
        db = await mongoService.getDb();
        const db2 = await mongoService.getDb();
        expect(db2).equal(db);
    });


    it("should return a correct normalized value", () => {
        // check for valid ObjectID
        expect(mongoService.normalizedId("5780eb7c9b711a3e2c1bc2d5")).deep.equal(new ObjectID("5780eb7c9b711a3e2c1bc2d5"));

         // check for invalid ObjectID
        expect(mongoService.normalizedId("aaa")).equal("aaa");
    });

});