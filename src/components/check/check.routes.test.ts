import { expect } from "chai";
import * as sinon from "sinon";

import checkRoutes from "./check.routes";
import checkController from "./check.controller";

describe("check routes", () => {
    const app: any = {
        get: sinon.spy(),
    };

    before( () => {
        checkRoutes.init(app);
    });

    it("/check - should call the correct method in controller", () => {
        expect(app.get.calledWith("/check", checkController.getCheckPage)).to.be.true;
    });

});