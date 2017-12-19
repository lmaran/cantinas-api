import { expect } from "chai";
import * as request from "supertest";

import app from "../../app";

describe("User routes", () => {
    let res: request.Response;

    describe ("GET /api/user", () => {
        it("should get an array", async () => {
            res = await request(app).get("/api/user");
            expect(res.status).to.equal(200);
            expect(res.body).to.be.an("array");
        });
    });

    describe ("GET /api/user/:id", () => {
        it("should get an object", async () => {
            res = await request(app).get("/api/user/123");
            expect(res.status).to.equal(200);
        });
    });

});

// --------------------------------
// old

// // met2: callback (end + done)
// describe ("GET /api/user", () => {
//     it("should get an array", (done) => {
//         request(app)
//             .get("/api/user")
//             .end((err, res: Response) => {
//                 expect(res.status).to.equal(200);
//                 expect(res.body).to.be.an("array");
//                 done();
//             });
//     });
// });

// // met3: promise (then)
// describe ("GET /api/user", () => {
//     it("should get an array", () => {
//         request(app)
//             .get("/api/user")
//             .then( (res: Response) => {
//                 expect(res.status).to.equal(200);
//                 expect(res.body).to.be.an("array");
//             });
//     });
// });