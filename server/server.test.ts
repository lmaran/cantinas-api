// import * as sinon from "sinon";
// import { expect } from "chai";
// import config from "./config";

// // import app from "./app";
// // import * as app from "./app";
// import * as http from "http";
// import server from "./server";
// import { Application } from "express";
// import { EventEmitter } from "events";

// describe("Server", () => {

//     // it("should use a predefined port", () => {
//     //     const original = config.port;
//     //     config.port = 1234;
//     //     const spy = sinon.spy(server.httpServer, "listen");

//     //     server.start();

//     //     sinon.assert.calledWith(spy, 1234);
//     //     spy.restore();
//     //     config.port = original;
//     // });

//     // it("should use 1400 as a default port", function() {
//     //     const spy = sinon.spy(server.httpServer, "listen");

//     //     server.start();
//     //     console.log(server.httpServer.address());
//     //     sinon.assert.calledWith(spy, 1410);
//     //     spy.restore();
//     // });

//     it("should not get an error", () => {
//         // const spy1 = sinon.spy(server.httpServer, "on").withArgs("listening");
//         console.log(server.httpServer);
//         if (server.httpServer == undefined) {
//             server.start();
//             return;
//         }

//         const aaa = "aaab";
//         console.log(aaa);
//         // ensure we don't have an address in use
//         const spy = sinon.spy(server.httpServer, "listen");

//         console.log(server.httpServer.address());

//         server.close();
//         server.httpServer.on("close", () => {
//             console.log(aaa);
//             console.log(server.httpServer.address());
//             expect(spy.callCount).to.equal(0);
//             expect(spy.called).to.equal(false);

//             server.start();
//             console.log(aaa);
//             console.log(server.httpServer.address());
//             expect(spy.called).to.equal(true);
//             sinon.assert.calledWith(spy, 1410);
//             spy.restore();
//         });

//         // sinon.assert.calledWith(spy, 1410);
//         // spy.restore();
//     });

//     // it("should create the app222", () => {
//     //     //       console.log(app);
//     //     //        app.default = {};

//     //             // const logSpy: any = sinon.spy(console, "log");
//     //             const spy1 = sinon.spy(server.httpServer, "on").withArgs("listening");
//     //             // stub.
//     //             // // server.close();
//     //             server.start();
//     //             console.log(spy1.args[0]);

//     //             const listedCallback = spy1.firstCall.args[1];
//     //             console.log(listedCallback);
//     //             listedCallback();

//     //             // expect(logSpy.called).to.be.true;
//     //             // sinon.assert.calledWith(logSpy, "asd");

//     //             // const spy = sinon.spy();
//     //             // let emitter: EventEmitter  = new EventEmitter;
//     //             // emitter.on('foo', spy);

//     //             // console.log(stub.withArgs("listening").calledWith());
//     //             // expect(spy.calledOnce);
//     //             // // expect(spy.calledWith(1410)).to.be.true;
//     //             // sinon.assert.calledWith(spy, 1234);
//     //             // spy.restore();
//     //             // config.port = original;
//     //             // // console.log(spy.args[0]);
//     //             // // this ensures we call our next() function on our middleware
//     //             // // spy.withArgs().callsArg(2);

//     //             // // server();
//     //             // // // console.log(expressStub.callCount);
//     //             // // expect(expressStub.called).to.be.true;

//     //             // logSpy.restore();
//     //             spy1.restore();
//     //         });

// });
