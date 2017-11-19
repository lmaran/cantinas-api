import { expect } from "chai";
import * as sinon from "sinon";

import allRoutes from "./routes";

// Modules are cached after the first time they are loaded, so you can just
// load them first in your test file and stub them using a library like sinon.
// https://stackoverflow.com/a/42498606
import userRoutes from "./components/user/user.routes";

describe ("User Service", () => {

    let userRoutesStub: any;
    const app: any = {};
    beforeEach(() => {
        // app = {
        //     get: sinon.spy()
        // };
        userRoutesStub = sinon.stub(userRoutes, "attachTo");
        // userRoutesStub.returns([{ name: "user 1" }]);
    });
    afterEach(() => {
        userRoutesStub.restore();
    });

    it("should call userRoutes", function() {
        allRoutes.attachTo(app); // a 'default' function is exported
        expect(userRoutesStub.calledWith(app)).to.be.true;
    });

});