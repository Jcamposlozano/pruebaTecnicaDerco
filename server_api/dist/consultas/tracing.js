"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Tracing = void 0;
class Tracing {
    getStatusSites1() {
        let sql = String("select * " +
            ",CASE " +
            "    WHEN CURDATE() = ultimaFechaExtraccion THEN " +
            "        True " +
            "    else " +
            "        False " +
            "end AS Extraccion " +
            "from (select " +
            "nombre_zona " +
            ",nombre_pais " +
            ",nombre_marca " +
            ",url " +
            ",mt.viwe_id " +
            ",min(mt.dateInit) as primera_fecha " +
            ",max(mt.dateInit) as ultima_fecha " +
            ",max(mt.dateExtraccion) as ultimaFechaExtraccion " +
            "from " +
            "(select " +
            "zn.nombre_zona " +
            ",ct.nombre_pais " +
            ",br.nombre_marca " +
            ",st.url " +
            ",sb.viwe_id " +
            "from zone as zn, " +
            "countries as ct, " +
            "brands as br, " +
            "sites as st, " +
            "sub_sites as sb " +
            "where " +
            "zn.cod_zona = ct.cod_zona " +
            "and ct.cod_pais = br.cod_pais " +
            "and br.cod_brand = st.cod_brand " +
            "and st.ua = sb.ua) as t1 " +
            "left join metricas_analytics as mt " +
            "on t1.viwe_id = mt.viwe_id " +
            "group by 1,2,3,4,5 " +
            "order by 1,2,3) as t2; ");
        return sql;
    }
}
exports.Tracing = Tracing;
