import { expect } from "chai";
import * as request from "supertest";

import app from "../../app";

describe("Home routes", () => {
    let res: request.Response;

    describe ("GET /api", () => {
        it("should get a string", async () => {
            res = await request(app).get("/api");
            expect(res.status).to.equal(200);
            expect(res.text).equal("Hello Cantinas API");
        });
    });

});
