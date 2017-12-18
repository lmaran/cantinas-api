import { expect } from "chai";
import * as sinon from "sinon";

import homeRoutes from "./home.routes";
import homeController from "./home.controller";

describe("home routes", () => {
    const app: any = {
        get: sinon.spy(),
    };

    before( () => {
        homeRoutes.init(app);
    });

    it("/ - should call the correct method in controller", () => {
        expect(app.get.calledWith("/", homeController.getHomePage)).to.be.true;
    });

});