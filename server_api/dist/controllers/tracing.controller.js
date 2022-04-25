"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getStatusSites1 = void 0;
const dataBase_1 = require("../dataBase");
const tracing_1 = require("../consultas/tracing");
const config = require('../../config.js');
let tracing = new tracing_1.Tracing();
const getStatusSites1 = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tracing.getStatusSites1()));
            conn.end();
            return res.status(200).json(posts[0]);
        }
        else {
            return res.status(406).json('error authentication');
        }
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getStatusSites1 = getStatusSites1;
