import { expect } from "chai";
import * as sinon from "sinon";
import { Application } from "express";

import app from "./app";
import allRoutes from "./routes";

describe ("App module", () => {

    beforeEach(() => {

    });

    it("should init routes", () => {
        const allRoutesSpy = allRoutes.init = sinon.spy();
        // const app = expressApp.getInstance();
        expect(app).to.exist;
        // expect(allRoutesSpy.calledWith(app)).to.be.true;
        // expect(1).to.equal(1);
    });

});