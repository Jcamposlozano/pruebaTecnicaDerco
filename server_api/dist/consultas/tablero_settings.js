"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tablero = void 0;
class Tablero {
    getSites(country) {
        let sql = String("select " +
            "nombre_marca, " +
            "ua, " +
            "url, " +
            "gtm, " +
            "max(cast(num_total as SIGNED INTEGER)) as num_total, " +
            "max(cast(num_activas as SIGNED INTEGER)) as num_activas, " +
            "activa " +
            "from " +
            "(SELECT " +
            "bd.nombre_marca , " +
            "st.UA as ua , " +
            "st.url , " +
            "st.gtm , " +
            "CASE " +
            "WHEN cast(tc.num_total as SIGNED INTEGER) IS NULL " +
            "THEN 0 ELSE tc.num_total END AS num_total, " +
            "CASE " +
            "WHEN cast(tc.num_activas as SIGNED INTEGER) IS NULL " +
            "THEN 0 ELSE tc.num_activas END AS num_activas, " +
            "st.activa " +
            "FROM countries as ct " +
            "inner JOIN brands as bd on ct.cod_pais = bd.cod_pais " +
            "inner JOIN sites as st on bd.cod_brand = st.cod_brand " +
            "left join sub_sites as sb on sb.ua = st.ua " +
            "left JOIN " +
            "(select " +
            "viwe_id, " +
            "count(*) as num_total, " +
            "sum(cast(activo as SIGNED INTEGER)) as num_activas " +
            "from tracing " +
            "group by 1) as tc on sb.viwe_id = tc.viwe_id " +
            "WHERE ct.nombre_pais = '" + country + "' ) as t " +
            "group by 1,2,3,4,7 order by 1;");
        return sql;
    }
    getTracing(viwe_id) {
        let sql = String("select " +
            "tc.activo " +
            ",tc.cod_periodicidad " +
            ",tp.nombre_periodicidad " +
            ",tc.cod_type_tracing " +
            ",tt.type_tracing " +
            "from " +
            "tracing as tc " +
            ",type_periodicidad as tp " +
            ",type_tracings as tt " +
            "where " +
            "tc.cod_periodicidad = tp.cod_periodicidad " +
            "and tc.cod_type_tracing = tt.cod_type_tracing " +
            "and tc.viwe_id = '" + viwe_id + "';");
        return sql;
    }
    getSubSites(ua) {
        let sql = String("select " +
            "sb.viwe_id, " +
            "sb.nombre, " +
            "sb.campain_name_real, " +
            "sb.url_dashboard " +
            "from sites as st, " +
            "sub_sites as sb " +
            "WHERE " +
            "st.ua = sb.ua " +
            "and st.ua = '" + ua + "' " +
            "group by 1,2,3,4;");
        return sql;
    }
    getType_tracing() {
        let sql = String("SELECT * FROM type_tracings");
        return sql;
    }
    getType_periodicidad() {
        let sql = String("SELECT * FROM type_periodicidad;");
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
    createSite(req) {
        const { ua, url, gtm, activa, cod_brand } = req.body;
        let sql = String("INSERT INTO sites (ua, url, gtm, activa, cod_brand) " +
            " VALUES ('" + ua + "','" + url + "','" + gtm + "'," + activa + ",'"
            + cod_brand + "')");
        return sql;
    }
    deleteSite(ua) {
        let sql = String("DELETE FROM sites " +
            "where ua = '" + ua + "'; ");
        return sql;
    }
    updateSite(req, ua) {
        const { url, gtm, activa } = req.body;
        let sql = String("UPDATE site set " +
            "url = '" + url + "' " +
            "gtm = '" + gtm + "' " +
            "activa = '" + activa + "' " +
            "where ua = '" + ua + "';");
        return sql;
    }
    getCountries() {
        let sql = String("SELECT * FROM countries " +
            "order by 3;");
        return sql;
    }
    getBrands(cod_pais) {
        let sql = String("select br.cod_brand , " +
            "br.nombre_marca ," +
            "br.cod_pais " +
            "from countries as ct ," +
            "brands as br " +
            "where ct.cod_pais = br.cod_pais " +
            "and ct.cod_pais = '" + cod_pais + "' " +
            "group by 1,2,3 order by 2;");
        return sql;
    }
    createSubSite(req) {
        const { viwe_id, nombre, ua, url_dashboard, campain_name_real } = req.body;
        let sql = String("INSERT INTO sub_sites (viwe_id,nombre, " +
            "ua, url_dashboard,campain_name_real) " +
            "VALUES ('" + viwe_id + "','" + nombre + "','" + ua + "','" +
            url_dashboard + "','" + campain_name_real + "');");
        return sql;
    }
    updateSubSite(req, viwe_id) {
        const { nombre, url_dashboard, campain_name_real } = req.body;
        let sql = String("UPDATE sub_sites set " +
            "nombre = '" + nombre + "' " +
            ",url_dashboard = '" + url_dashboard + "' " +
            ",campain_name_real = '" + campain_name_real + "' " +
            "where viwe_id = '" + viwe_id + "';");
        return sql;
    }
    deleteSubSite(viwe_id) {
        let sql = String("DELETE FROM sub_sites " +
            "where viwe_id = '" + viwe_id + "'; ");
        return sql;
    }
    changeStatusSite(ua, activa) {
        let sql = String("UPDATE sites " +
            "SET activa = " + activa + " " +
            "WHERE ua = '" + ua + "';");
        return sql;
    }
    changeStatusTracing(cod, activa) {
        let sql = String("UPDATE tracing " +
            "SET activo = " + activa + " " +
            "WHERE cod_type_tracing_viwe_id = '" + cod + "';");
        return sql;
    }
    unassignedCDP() {
        let sql = String("SELECT " +
            "cdp.campain " +
            ",cdp.country " +
            ",cdp.brand " +
            "from " +
            "campains as cp " +
            "RIGHT JOIN " +
            "campaniasCDP as cdp " +
            "ON cp.campain = cdp.campain " +
            "where " +
            "cp.campain is null " +
            "group by 1,2,3;");
        let sql2 = String("SELECT " +
            "CASE " +
            "    WHEN country = 'MX' THEN 'flag-icon flag-icon-mx' " +
            "    WHEN country = 'CO' THEN 'flag-icon flag-icon-co' " +
            "    WHEN country = 'PY' THEN 'flag-icon flag-icon-py' " +
            "    WHEN country = 'CL' THEN 'flag-icon flag-icon-cl' " +
            "    WHEN country = 'PAN' THEN 'flag-icon flag-icon-pa' " +
            "    WHEN country = 'DOM' THEN 'flag-icon flag-icon-do' " +
            "    WHEN country = 'PE' THEN 'flag-icon flag-icon-pe' " +
            "    WHEN country = 'EC' THEN 'flag-icon flag-icon-ec' " +
            "    WHEN country = 'BO' THEN 'flag-icon flag-icon-bo' " +
            "    WHEN country = 'HND' THEN 'flag-icon flag-icon-hn' " +
            "    WHEN country = 'SLV' THEN 'flag-icon flag-icon-sl' " +
            "    ELSE '' " +
            "END as icon " +
            ",country " +
            ",CASE " +
            "    WHEN country = 'MX' THEN 'MEXICO' " +
            "    WHEN country = 'CO' THEN 'COLOMBIA' " +
            "    WHEN country = 'PY' THEN 'PARAGUAY' " +
            "    WHEN country = 'CL' THEN 'CHILE' " +
            "    WHEN country = 'PAN' THEN 'PANAMA' " +
            "    WHEN country = 'DOM' THEN 'REPUBLICA DOMINICANA' " +
            "    WHEN country = 'PE' THEN 'PERU' " +
            "    WHEN country = 'EC' THEN 'ECUADOR' " +
            "    WHEN country = 'BO' THEN 'BOLIVIA' " +
            "    WHEN country = 'HND' THEN 'HONDURAS' " +
            "    WHEN country = 'SLV' THEN 'SALVADOR' " +
            "    ELSE '' " +
            "END as country_complete " +
            ",COUNT(*) AS numero " +
            "FROM (SELECT " +
            "cdp.campain ,cdp.country  ,cdp.brand  from " +
            "campains as cp " +
            "RIGHT JOIN  campaniasCDP as cdp " +
            "ON cp.campain = cdp.campain " +
            "where  cp.campain is null " +
            "group by 1,2,3) AS T1 " +
            "GROUP BY 1,2 " +
            "ORDER BY 4 DESC;");
        return sql2;
    }
    campainCdp(viwe_id) {
        let sql = String("select " +
            "cp.campain " +
            "from sub_sites as sb, " +
            "campains as cp " +
            "where " +
            "sb.viwe_id = cp.viwe_id " +
            "and sb.viwe_id = '" + viwe_id + "';");
        return sql;
    }
    createCampainCdp(viwe_id, campain) {
        let sql = String("INSERT INTO campains (viwe_id,campain,nombre) " +
            "VALUES ('" + viwe_id + "','" + campain + "','" + campain + "');");
        return sql;
    }
    deleteCampainCdp(viwe_id, campain) {
        let sql = String("DELETE FROM campains " +
            "WHERE campain = '" + campain + "' " +
            "AND viwe_id = '" + viwe_id + "';");
        return sql;
    }
    getBenchmarks() {
        let sql = String("select * from benchmarks;");
        return sql;
    }
    getPonderations() {
        let sql = String("SELECT * FROM ponderations;");
        return sql;
    }
    getDescribeView(viwe_id) {
        let sql = String("select * from " +
            "(select " +
            "max(cast(dateInit as date)) as dateInit " +
            ",min(cast(dateInit as date)) as dateEnd " +
            ",sum(sessions) as totalSessions " +
            ",'All Data' as origin " +
            "from metricas_analytics " +
            "where viwe_id = '" + viwe_id + "' " +
            "group by 4 " +
            "UNION all  " +
            "select " +
            "max(cast(dateInit as date)) as dateInit " +
            ",min(cast(dateInit as date)) as dateEnd " +
            ",sum(sessions) as totalSessions " +
            ",'Organic Data' as origin " +
            "from metricas_analytics_organic " +
            "where viwe_id = '" + viwe_id + "' " +
            "group by 4) as t1; ");
        return sql;
    }
    getTracingSeo(ua) {
        let sql = String("select " +
            "hs.activo " +
            ",hs.fecha_ejecucion " +
            ",ty.homework " +
            ",hs.cod_type " +
            "from homeworks_seo as hs, " +
            "homeworks_type as ty " +
            "WHERE " +
            "hs.cod_type = ty.cod_type " +
            "and hs.ua = '" + ua + "';");
        return sql;
    }
    getTypeTracingSeo() {
        let sql = String("select * from homeworks_type;");
        return sql;
    }
    deleteTracingSeo(ua, cod_type) {
        let sql = String("delete FROM homeworks_seo " +
            "WHERE " +
            "ua = '" + ua + "' " +
            "and cod_type = '" + cod_type + "';");
        return sql;
    }
    changeStatusTracingSEO(ua, cod_type, activa) {
        let sql = String("update homeworks_seo " +
            "set activo = " + activa + " " +
            "WHERE " +
            "ua = '" + ua + "' " +
            "and cod_type = '" + cod_type + "';");
        return sql;
    }
    createTracingSeo(ua, cod_type, activa) {
        let sql = String("insert into homeworks_seo (activo,ua,cod_type) " +
            "values (" + activa + ",'" + ua + "','" + cod_type + "');");
        return sql;
    }
}
exports.Tablero = Tablero;
