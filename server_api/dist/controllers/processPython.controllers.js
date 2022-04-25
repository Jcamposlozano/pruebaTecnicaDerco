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
exports.getSitiosPython = void 0;
const dataBase_1 = require("../dataBase");
const processPython_1 = require("../consultas/processPython");
let processoPython = new processPython_1.ProcessPython();
const getSitiosPython = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(processoPython.getSites()));
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getSitiosPython = getSitiosPython;
