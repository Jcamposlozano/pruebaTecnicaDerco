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
exports.deleteTracing = exports.createTracing = exports.getType_tracing = exports.getType_periodicidad = exports.getTracing = exports.getCountries = exports.getZone = exports.getBrands = exports.getSitios = void 0;
const dataBase_1 = require("../dataBase");
const tablero_1 = require("../consultas/tablero");
const config = require('../../config.js');
let tablero = new tablero_1.Tablero();
const getSitios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const country = (req.params.country);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getSites(country)));
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
exports.getSitios = getSitios;
const getBrands = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const cod_pais = (req.params.cod_pais);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getBrands(cod_pais)));
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
exports.getBrands = getBrands;
const getZone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getZone()));
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
exports.getZone = getZone;
const getCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const cod_zone = (req.params.cod_zone);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getCountries(cod_zone)));
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
exports.getCountries = getCountries;
const getTracing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getTracing(ua)));
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
exports.getTracing = getTracing;
const getType_periodicidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getType_periodicidad()));
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
exports.getType_periodicidad = getType_periodicidad;
const getType_tracing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getType_tracing()));
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
exports.getType_tracing = getType_tracing;
const createTracing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            yield conn.query(String(tablero.createTracing(req)));
            conn.end();
            return res.json(`Tarea creada`);
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
exports.createTracing = createTracing;
const deleteTracing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const key = (req.params.key);
            const conn = yield dataBase_1.connect();
            yield conn.query(String(tablero.deleteTracint(key)));
            conn.end();
            return res.json(`Tarea eliminada`);
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
exports.deleteTracing = deleteTracing;
