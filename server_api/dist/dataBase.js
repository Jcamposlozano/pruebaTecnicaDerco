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
exports.connect = void 0;
const promise_1 = require("mysql2/promise");
function connect() {
    return __awaiter(this, void 0, void 0, function* () {
        const config = require('../config.js');
        const connection = yield promise_1.createPool({
            user: "root",
            host: "localhost",
            password: "prueba_tecnicas",
            database: "db_data",
            connectionLimit: 10,
            waitForConnections: true,
            queueLimit: 0
        });
        return connection;
    });
}
exports.connect = connect;
