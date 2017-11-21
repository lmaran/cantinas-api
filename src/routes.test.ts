import { expect } from "chai";
import * as sinon from "sinon";

import * as express from "express";
import allRoutes from "./routes";
import userRoutes from "./components/user/user.routes";

// Modules are cached after the first time they are loaded, so you can just
// load them first in your test file and stub them using a library like sinon.
// https://stackoverflow.com/a/42498606

// let userRoutesSpy: any;
const userRoutesSpy = sinon.spy(userRoutes);



describe ("All routes", () => {

    beforeEach(() => {

        // app = {
        //     get: sinon.spy()
        // };
        // userRoutesStub = sinon.stub(userRoutes, "attachTo");
        // userRoutesSpy = sinon.spy(userRoutes);
    });
    afterEach(() => {
        // userRoutesStub.restore();
    });

    it("should call userRoutes", function() {
        // allRoutes.attachTo(app); // a 'default' function is exported
        // expect(userRoutesSpy.calledWith(app)).to.be.true;
        // const allRoutes = require("./routes");
        // const userRoutes = require("./components/user/user.routes");
        console.log(userRoutes.toString());
        // let userRoutesSpy = sinon.spy(userRoutes, "default");
        // const app: express.Application = express();

        // app.use("/", allRoutes);

        // const cc = userRoutes.getCall(0);

        // expect(userRoutesSpy.called).to.be.true;
        // expect(userRoutes).to.exist;
    });

});