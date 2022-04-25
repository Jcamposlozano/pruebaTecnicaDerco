"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const metrics = __importStar(require("../controllers/metrics.controllers"));
const router = express_1.Router();
/**************************************************/
router.get('/Derco/Dashboard/anios', metrics.getAnios);
router.get('/Derco/Dashboard/region', metrics.getRegion);
router.get('/Derco/Dashboard/MapInformation/:region/:years', metrics.getMapInformation);
router.get('/Derco/Dashboard/getRankingPerNumber/:region/:years', metrics.getRankingPerNumber);
router.get('/Derco/Dashboard/getRankingPerSales/:region/:years', metrics.getRankingPerSales);
router.get('/Derco/Dashboard/getClasificationPerNumber/:region/:years', metrics.getClasificationPerNumber);
router.get('/Derco/Dashboard/getBarRegion/:region/:years', metrics.getBarRegion);
router.get('/Derco/Dashboard/getSeriesSales/:region/:years', metrics.getSeriesSales);
router.get('/Derco/Dashboard/getBarperbrand/:region/:years', metrics.getBarperbrand);
router.get('/Derco/Dashboard/getTableDerco/:region/:years', metrics.getTableDerco);
/*****************************************************/
exports.default = router;
