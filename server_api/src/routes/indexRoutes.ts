import {Router} from 'express';
import * as metrics from '../controllers/metrics.controllers';

const router = Router();


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




export default router;