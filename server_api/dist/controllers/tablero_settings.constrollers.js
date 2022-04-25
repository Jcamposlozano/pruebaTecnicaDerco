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
exports.createTracingSeo = exports.changeStatusTracingSEO = exports.deleteTracingSeo = exports.getTypeTracingSeo = exports.getTracingSeo = exports.getDescribeView = exports.getPonderations = exports.getBenchmarks = exports.deleteCampainCdp = exports.createCampainCdp = exports.campainCdp = exports.unassignedCDP = exports.updateSubSite = exports.changeStatusTracing = exports.changeStatusSite = exports.deleteSubSite = exports.createSubSite = exports.updateSite = exports.deleteSite = exports.createSite = exports.deleteTracing = exports.createTracing = exports.getType_tracing = exports.getType_periodicidad = exports.getSubSites = exports.getTracing = exports.getCountries = exports.getBrands = exports.getSitios = void 0;
const dataBase_1 = require("../dataBase");
const tablero_settings_1 = require("../consultas/tablero_settings");
let tablero = new tablero_settings_1.Tablero();
const config = require('../../config.js');
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
const getCountries = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            console.log("--->Entre");
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getCountries()));
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
            const viwe_id = (req.params.viwe_id);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getTracing(viwe_id)));
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
const getSubSites = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getSubSites(ua)));
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
exports.getSubSites = getSubSites;
const getType_periodicidad = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
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
        const conn = yield dataBase_1.connect();
        yield conn.query(String(tablero.createTracing(req)));
        conn.end();
        return res.json(`Tarea creada`);
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
const createSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            yield conn.query(String(tablero.createSite(req)));
            conn.end();
            return res.json(`Site Create`);
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
exports.createSite = createSite;
const deleteSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const ua = (req.params.ua);
        const conn = yield dataBase_1.connect();
        yield conn.query(String(tablero.deleteSite(ua)));
        conn.end();
        return res.json(`Site Eliminated`);
    }
    catch (err) {
        console.log(err);
        return res.status(500).json('Internal server error');
    }
});
exports.deleteSite = deleteSite;
const updateSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const conn = yield dataBase_1.connect();
            yield conn.query(String(tablero.updateSite(req, ua)));
            conn.end();
            return res.json(`Site Eliminated`);
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
exports.updateSite = updateSite;
const createSubSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            yield conn.query(String(tablero.createSubSite(req)));
            conn.end();
            return res.json(`SubSite Create`);
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
exports.createSubSite = createSubSite;
const deleteSubSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const viwe_id = (req.params.viwe_id);
            const conn = yield dataBase_1.connect();
            yield conn.query(String(tablero.deleteSubSite(viwe_id)));
            conn.end();
            return res.json(`Site Eliminated`);
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
exports.deleteSubSite = deleteSubSite;
const changeStatusSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const activa = (req.params.activa);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.changeStatusSite(ua, activa)));
            conn.end();
            return res.json(`Site Status change`);
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
exports.changeStatusSite = changeStatusSite;
const changeStatusTracing = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const cod = (req.params.cod);
            const activa = (req.params.activa);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.changeStatusTracing(cod, activa)));
            conn.end();
            return res.json(`Site Status change`);
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
exports.changeStatusTracing = changeStatusTracing;
const updateSubSite = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const viwe_id = (req.params.viwe_id);
            const conn = yield dataBase_1.connect();
            yield conn.query(String(tablero.updateSubSite(req, viwe_id)));
            conn.end();
            return res.json(`Site Update`);
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
exports.updateSubSite = updateSubSite;
const unassignedCDP = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.unassignedCDP()));
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
exports.unassignedCDP = unassignedCDP;
const campainCdp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const viwe_id = (req.params.viwe_id);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.campainCdp(viwe_id)));
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
exports.campainCdp = campainCdp;
const createCampainCdp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const viwe_id = (req.params.viwe_id);
            const campain = (req.params.campain);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.createCampainCdp(viwe_id, campain)));
            conn.end();
            return res.json(`Create Campain CDP`);
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
exports.createCampainCdp = createCampainCdp;
const deleteCampainCdp = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const viwe_id = (req.params.viwe_id);
            const campain = (req.params.campain);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.deleteCampainCdp(viwe_id, campain)));
            conn.end();
            return res.json(`Delete Campain ` + campain);
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
exports.deleteCampainCdp = deleteCampainCdp;
const getBenchmarks = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getBenchmarks()));
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
exports.getBenchmarks = getBenchmarks;
const getPonderations = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getPonderations()));
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
exports.getPonderations = getPonderations;
const getDescribeView = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const viwe_id = (req.params.viwe_id);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getDescribeView(viwe_id)));
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
exports.getDescribeView = getDescribeView;
const getTracingSeo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getTracingSeo(ua)));
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
exports.getTracingSeo = getTracingSeo;
const getTypeTracingSeo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.getTypeTracingSeo()));
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
exports.getTypeTracingSeo = getTypeTracingSeo;
const deleteTracingSeo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const cod_type = (req.params.cod_type);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.deleteTracingSeo(ua, cod_type)));
            conn.end();
            return res.json(`Delete Tracing`);
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
exports.deleteTracingSeo = deleteTracingSeo;
const changeStatusTracingSEO = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const cod_type = (req.params.cod_type);
            const activa = (req.params.activa);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.changeStatusTracingSEO(ua, cod_type, activa)));
            conn.end();
            return res.json(`Site Status change`);
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
exports.changeStatusTracingSEO = changeStatusTracingSEO;
const createTracingSeo = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { user_access } = req.headers;
        const { password } = req.headers;
        if (config.USER_ACCESS === user_access && config.PASSWORD === password) {
            const ua = (req.params.ua);
            const cod_type = (req.params.cod_type);
            const activa = (req.params.activa);
            const conn = yield dataBase_1.connect();
            const posts = yield conn.query(String(tablero.createTracingSeo(ua, cod_type, activa)));
            conn.end();
            return res.json(`Site Status change`);
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
exports.createTracingSeo = createTracingSeo;
