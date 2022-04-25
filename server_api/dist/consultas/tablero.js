"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
class Tablero {
    getSites(country) {
        let sql = String("select * " +
            "from (SELECT " +
            "bd.nombre_marca " +
            ",st.gtm as gtm " +
            ",st.url " +
            ",st.activa " +
            "FROM " +
            "countries as ct inner JOIN brands as bd on ct.cod_pais = bd.cod_pais " +
            "inner JOIN sites as st on bd.cod_brand = st.cod_brand " +
            "left join sub_sites as sb on sb.gtm = st.gtm " +
            "left JOIN tracings as tc on sb.view_id = tc.view_id " +
            "WHERE " +
            "ct.nombre_pais = '" + country + "' ) as t " +
            "group by 1,2,3,4 " +
            "order by 1");
        return sql;
    }
    getTracing(ua) {
        let sql = String("SELECT " +
            "t2.fecha_ejecucion " +
            ",t3.nombre_periodicidad " +
            ",t2.activo " +
            ",t4.cod_type_tracing " +
            "FROM sites t1 " +
            ",tracing t2 " +
            ",type_periodicidad t3 " +
            ",type_tracings t4 " +
            "WHERE t1.UA = t2.ua " +
            "and t2.cod_periodicidad = t3.cod_periodicidad " +
            "and t2.cod_type_tracing = t4.cod_type_tracing " +
            "and t1.UA = '" + ua + "'");
        return sql;
    }
    getType_tracing() {
        let sql = String("SELECT * FROM type_tracings");
        return sql;
    }
    getType_periodicidad() {
        let sql = String("SELECT * FROM type_periodicidad");
        return sql;
    }
    getZone() {
        let sql = String("SELECT * FROM zone");
        return sql;
    }
    createTracing(req) {
        const { tracing, periodicity, tracingT, view_id } = req.body;
        let sql = String("INSERT INTO tracing (cod_type_tracing_viwe_id,activo,cod_type_tracing,cod_periodicidad,viwe_id) " +
            "VALUES ('" + tracingT + view_id + "'," + tracing + ",'" + tracingT + "'," +
            "'" + periodicity + "','" + view_id + "');");
        return sql;
    }
    deleteTracint(key) {
        let sql = String("DELETE FROM tracing " +
            "where cod_type_tracing_viwe_id = '" + key + "'; ");
        return sql;
    }
    getCountries(cod_zone) {
        let sql = String("SELECT * FROM countries where cod_zona in ('" + cod_zone + "');");
        return sql;
    }
    getBrands(cod_pais) {
        let sql = String("select " +
            "br.cod_brand " +
            ",br.nombre_marca " +
            ",br.cod_pais " +
            "from countries as ct " +
            ", brands as br " +
            ", sites as st " +
            ", sub_sites as sb " +
            ", metricas_analytics as mt " +
            "where " +
            "ct.cod_pais = br.cod_pais " +
            "and br.cod_brand = st.cod_brand " +
            "and sb.ua = st.ua " +
            "and mt.viwe_id = sb.viwe_id " +
            "and ct.cod_pais = '" + cod_pais + "' " +
            "group by 1,2,3 " +
            "order by 2;");
        return sql;
    }
}
exports.Tablero = Tablero;
