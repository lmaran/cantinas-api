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
const checkController = {
    getCheckPage: (req, res) => __awaiter(this, void 0, void 0, function* () {
        // set DEPLOYMET_SLOT as env variable on remote server
        // e.g. "celebrate-taste-blue-staging"
        res.send("cantinas-api-" + (process.env.DEPLOYMENT_SLOT || "noslot") + "-" + process.env.NODE_ENV);
        // res.send("aaa");
        // res.json({aa: 12});
    }),
};
exports.default = checkController;
