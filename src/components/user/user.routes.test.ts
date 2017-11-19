import { expect } from "chai";
import * as sinon from "sinon";

import userRoutes from "./user.routes";
import userController from "./user.controller";

describe("User routes", () => {
    const app: any = {
        get: sinon.spy(),
        post: sinon.spy(),
        delete: sinon.spy()
    };

    before( () => {
        userRoutes.attachTo(app);
    });

    it("/api/user/:id - should call the correct method in controller", () => {
        expect(app.get.calledWith("/api/user/:id", userController.getById)).to.be.true;
    });

    it("/api/user - should call the correct method in controller", () => {
        expect(app.get.calledWith("/api/user", userController.getAll)).to.be.true;
    });

});