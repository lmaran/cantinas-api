// import { expect } from "chai";
// import * as sinon from "sinon";

// import * as express from "express";
// import initRoutes from "./routes";
// import { Application } from "express-serve-static-core";
// import userRoutes from "./components/user/user.routes";
// import homeRoutes from "./components/home/home.routes";
// import checkRoutes from "./components/check/check.routes";

// // Modules are cached after the first time they are loaded, so you can just
// // load them first in your test file and stub them using a library like sinon.
// // https://stackoverflow.com/a/42498606

// describe ("All routes", () => {

//     const app: any = {
//         get: sinon.spy()
//     };

//     const userRoutesSpy = userRoutes.init = sinon.spy();
//     const homeRoutesSpy = homeRoutes.init = sinon.spy();
//     const checkRoutesSpy = checkRoutes.init = sinon.spy();

//     before(() => {
//         initRoutes.init(app);
//     });

//     it("should call userRoutes", function() {
//         expect(userRoutesSpy.calledWith(app)).to.be.true;
//     });

//     it("should call homeRoutes", function() {
//         expect(homeRoutesSpy.calledWith(app)).to.be.true;
//     });

//     it("should call checkRoutes", function() {
//         expect(checkRoutesSpy.calledWith(app)).to.be.true;
//     });

// });