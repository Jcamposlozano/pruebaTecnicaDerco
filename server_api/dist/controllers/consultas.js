"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Consultas = void 0;
class Consultas {
    consultaTarjetas() {
        let sql = String('select ' +
            'sum(t5.sessions) AS SESIONES ' +
            ',sum(t5.bounces) / sum(t5.sessions) AS Bounce_Rate ' +
            ',sum(t5.pageviews) / sum(t5.sessions) AS Pages_Session ' +
            ',sum(t5.bounces) / 60000 AS AVG_session_durarion ' +
            ',sum(t5.newusers) / sum(t5.users)  AS P_new_sessions ' +
            ',sum(t5.users) AS Users ' +
            'from dp_analytics.zone t1 ' +
            'join dp_analytics.countries t2 ' +
            'join dp_analytics.brands t3 ' +
            'join dp_analytics.sites t4 ' +
            'join dp_analytics.metricas_analytics t5 ' +
            'join dp_analytics.ponderation as t6 ' +
            'join dp_analytics.benchmarks as t7 ' +
            'where t1.cod_zona = t2.cod_zona ' +
            'and t2.codigo_pais = t3.codigo_pais ' +
            'and t3.cod_brand = t4.cod_brand ' +
            ' and t4.UA = t5.UA ' +
            'and t4.type = t6.type ' +
            'and t4.type = t7.type ' +
            "and t3.nombre_marca = 'POKER' " +
            "and cast(t5.dateInit as date) between cast('2021-03-29' as date) and cast('2021-04-04' as date);");
        return sql;
    }
}
exports.Consultas = Consultas;
