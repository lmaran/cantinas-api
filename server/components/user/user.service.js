"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const user_dal_1 = require("./user.dal");
const userService = {
    // getAll: async () => {
    //     return [{ name: "aaa" }];
    // }
    getAll: () => __awaiter(this, void 0, void 0, function* () {
        const users = yield user_dal_1.default.getAll();
        return (users);
    }),
    getById: (id) => __awaiter(this, void 0, void 0, function* () {
        const user = yield user_dal_1.default.getById(id);
        return (user);
    }),
    getPromisTest: (name) => __awaiter(this, void 0, void 0, function* () {
        return delayedHello(name, 1000);
    })
};
/**
 * Some predefined delays (in milliseconds).
 */
var Delays;
(function (Delays) {
    Delays[Delays["Short"] = 500] = "Short";
    Delays[Delays["Medium"] = 2000] = "Medium";
    Delays[Delays["Long"] = 5000] = "Long";
})(Delays = exports.Delays || (exports.Delays = {}));
/**
 * Returns a Promise<string> that resolves after given time.
 *
 * @param {string} name - A name.
 * @param {number=} [delay=Delays.Medium] - Number of milliseconds to delay resolution of the Promise.
 * @returns {Promise<string>}
 */
function delayedHello(name, delay = Delays.Medium) {
    return new Promise((resolve) => setTimeout(
    // (resolve) => setTimeout(
    () => resolve(`Hello, ${name}`), delay));
}
exports.default = userService;
