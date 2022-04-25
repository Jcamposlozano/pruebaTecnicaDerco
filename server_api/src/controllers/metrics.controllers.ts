import {Request, Response, response, request} from 'express';
import { connect } from '../dataBase';
import { ConsultasMetricas } from '../consultas/metricas'

let metricas = new ConsultasMetricas()
const config = require('../../config.js');


export const getAnios = async (req: Request, res: Response): Promise<Response> => {
    try{
        const conn = await connect();
        const posts = await conn.query(String(metricas.get_anios()));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const getRegion = async (req: Request, res: Response): Promise<Response> => {
    try{
        const conn = await connect();
        const posts = await conn.query(String(metricas.get_region()));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}

export const getMapInformation = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.get_map_information(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}



export const getRankingPerNumber = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.getRankingPerNumber(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const getRankingPerSales = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.getRankingPerSales(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const getClasificationPerNumber = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.getClasificationPerNumber(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const getBarRegion = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.getBarRegion(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}


export const getSeriesSales = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.getSeriesSales(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}

export const getBarperbrand = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.getBarperbrand(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}

export const getTableDerco = async (req: Request, res: Response): Promise<Response> => {
    try{
        
        const years = (req.params.years);
        const region = (req.params.region);
        const conn = await connect();
        const posts = await conn.query(String(metricas.getTableDerco(years,region)));
        conn.end();
        return res.status(200).json(posts[0]);
    }catch(err){
        console.log(err)
        return res.status(500).json('Internal server error');
    }
}