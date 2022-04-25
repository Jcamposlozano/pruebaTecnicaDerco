"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProcessPython = void 0;
class ProcessPython {
    getSites() {
        let sql = String("select * from vw_site_tracing_analytics;");
        return sql;
    }
}
exports.ProcessPython = ProcessPython;
