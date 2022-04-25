import {Request, Response} from 'express';


export class ConsultasMetricas{

        get_anios(){
            let sql = String ("select distinct anio from group_information;")
            console.log(sql)
            return sql
        }


        get_region(){
            let sql = String ("select distinct region from group_information;")
            console.log(sql)
            return sql
        }

        get_map_information(years:String, region:String){
            let sql = String(
                "select " +
                "lat " +
                ",lng " + 
                ",region " + 
                ",sum(amount) as total " +
                "from group_information " +
                "where region <> 'NO REGION' " +
                "and anio in (" + years + ") " + 
                "and region in (" + region + ") " +
                "group by 1,2,3; ")
                return sql
        }

        getRankingPerNumber(years:String, region:String){
            let sql = String(
                "select " +
                "marca " +
                ",sum(amount) as sales " +
                "from group_information " +
                "where " +
                "anio in (" + years + ") " +
                "and region in (" + region + ") " +
                "group by 1 " +
                "order by sum(amount) desc " +
                "limit 5; ")
                return sql
        }

        getRankingPerSales(years:String, region:String){
            let sql = String(
                "select " +
                "marca " +
                ",sum(values_c) as values_c " +
                "from group_information " +
                "where " +
                "anio in (" + years + ") " +
                "and region in (" + region + ") " +
                "group by 1 " +
                "order by sum(values_c) desc " +
                "limit 5; ")
                return sql
        } 

        getClasificationPerNumber(years:String, region:String){
            let sql = String(
                "select " +
                "case " +
                "when derco = 1 then 'Derco' " +
                "else 'Others'end as clasification " +
                ",sum(amount) as sales " +
                "from group_information " +
                "where " +
                "anio in (" + years + ") " +
                "and region in (" + region + ") " +
                "group by 1 " +
                "order by sum(values_c) desc " +
                "limit 5; ")
                return sql
        } 

        getBarRegion(years:String, region:String){
            let sql = String(
                "select " +
                "region " +
                ",sum(amount) as values_c " +
                "from group_information " +
                "where " +
                "anio in (" + years + ") " +
                "and region in (" + region + ") " +
                "group by 1 " +
                "order by region;")
                return sql
            }

        getSeriesSales(years:String, region:String){
                let sql = String(
                    "select " +
                    "anio " +
                    ",sum(values_c) as values_c " +
                    "from group_information " +
                    "where " +
                    "anio in (" + years + ") " +
                    "and region in (" + region + ") " +
                    "group by 1 " +
                    "order by anio;")
                    return sql
                }
        
    getBarperbrand(years:String, region:String){
                    let sql = String(
                        "select " +
                        "marca " +
                        ",sum(values_c) as values_c " +
                        "from group_information " +
                        "where values_c > 0 " +
                        "and anio in (" + years + ") " +
                        "and region in (" + region + ") " +
                        "group by 1 " +
                        "order by 1;")
                        return sql
                    }

    getTableDerco(years:String, region:String){
        let sql = String(
            "select " +
            "marca " +
            ",sum(amount) as amount " +
            ",sum(values_c) as values_c " +
            "from group_information " +
            "where " + 
            "derco = 1 " +
            "and anio in (" + years + ") " +
            "and region in (" + region + ") " +
            "group by 1;")
        return sql
        }
    

}