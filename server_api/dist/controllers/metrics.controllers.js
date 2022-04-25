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
exports.getTableDerco = exports.getBarperbrand = exports.getSeriesSales = exports.getBarRegion = exports.getClasificationPerNumber = exports.getRankingPerSales = exports.getRankingPerNumber = exports.getMapInformation = exports.getRegion = exports.getAnios = void 0;
const dataBase_1 = require("../dataBase");
const metricas_1 = require("../consultas/metricas");
let metricas = new metricas_1.ConsultasMetricas();
const config = require('../../config.js');
const getAnios = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.get_anios()));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getAnios = getAnios;
const getRegion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.get_region()));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getRegion = getRegion;
const getMapInformation = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.get_map_information(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getMapInformation = getMapInformation;
const getRankingPerNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.getRankingPerNumber(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getRankingPerNumber = getRankingPerNumber;
const getRankingPerSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.getRankingPerSales(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getRankingPerSales = getRankingPerSales;
const getClasificationPerNumber = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.getClasificationPerNumber(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getClasificationPerNumber = getClasificationPerNumber;
const getBarRegion = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.getBarRegion(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getBarRegion = getBarRegion;
const getSeriesSales = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.getSeriesSales(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getSeriesSales = getSeriesSales;
const getBarperbrand = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.getBarperbrand(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getBarperbrand = getBarperbrand;
const getTableDerco = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = yield dataBase_1.connect();
        const posts = yield conn.query(String(metricas.getTableDerco(years, region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.getTableDerco = getTableDerco;
