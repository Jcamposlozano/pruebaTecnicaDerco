import pymysql.cursors
from db_datos import Db_datos

class UploadInformation:
    
    def __init__(self):
        self.con = Db_datos()

    def execute_process(self):
        self.create_table()
        self.insert_information()
        self.normalice_region_colum()
        self.insert_information_brand()
        self.insert_information_group_table()
        
    def create_table(self):

        self.con.run_query("DROP TABLE IF EXISTS car_information;")
        self.con.run_query("DROP TABLE IF EXISTS region;")
        self.con.run_query("DROP TABLE IF EXISTS marcas;")
        self.con.run_query("DROP TABLE IF EXISTS group_information;")

        sql = str(
                "CREATE TABLE car_information( "
                "PLACA varchar(50), "
                "MARCA varchar(50), "
                "MODELO varchar(50), "
                "AÑO varchar(10), "
                "ID_CLIENTE varchar(50), "
                "COMUNA varchar(50), "
                "REGION varchar(50), "
                "SEXO varchar(10), "
                "ACTIVIDAD varchar(50), "
                "VALORVEHICULO float, "
                "FEC_TRANSFERENCIA varchar(50), "
                "COLOR varchar(50), "
                "EDAD varchar(10), "
                "VIGENCIA varchar(20));")
        self.con.run_query(sql)

        sql = str(
                    "CREATE TABLE region( "
                    "cod_region varchar(10), "
                    "name_region varchar(50), "
                    "lat varchar(50), "
                    "lng varchar(50), "
                    "primary key (cod_region ));")
        self.con.run_query(sql)

        sql = str (
                "insert into region (cod_region, name_region, lat, lng) values "
                "('01','DE TARAPACA','-20.164','-69.5541'), "
                "('02','DE ANTOFAGASTA','-23.7503','-69.6'), "
                "('03','DE ATACAMA','-27.5276','-70.2494'), "
                "('04','DE COQUIMBO','-30.8301','-70.9816'), "
                "('05','DE VALPARAISO','-32.9039','-71.0262'), "
                "('06','DEL LIBERTADOR BERNARDO OHIGGINS','-34.4294','-71.0393'), "
                "('07','DEL MAULE','-35.5892','-71.5007'), "
                "('08','DEL BIO BIO','-37.2442','-72.4661'), "
                "('09','DE LA ARAUCANIA','-38.5505','-72.4382'), "
                "('10','DE LOS LAGOS','-42.1071','-72.6425'), "
                "('11','AYSEN DEL GENERAL CARLOS IBANEZ','-46.2772','-73.6628'), "
                "('12','DE MAGALLANES Y ANTARTICA CHILENA','-54.3551','-70.5284'), "
                "('13','METROPOLITANA DE SANTIAGO','-33.4417','-70.6541'), "
                "('14','DE LOS RIOS','-39.9086','-72.7034'), "
                "('15','DE ARICA y PARINACOTA','-18.5075','-69.6451'); ")
        self.con.run_query(sql)

        sql = str(
                "create table marcas ( "
	                "marca varchar(50), "
                        "derco boolean default False, "
                        "primary key (marca));"
        )
        self.con.run_query(sql)

        sql = str(
                "create table group_information ( "
                "anio varchar(50), "
                "region varchar(50), "
                "marca varchar(50), "
                "derco boolean, "
                "lat varchar(50), "
                "lng varchar(50), "
                "amount int, "
                "values_c float);")
        self.con.run_query(sql)
                          
    def insert_information(self):
        archivo = open('../bbdd prueba corp.csv')
        sql = str("insert into car_information ("
                "PLACA,MARCA,MODELO,AÑO,ID_CLIENTE,COMUNA,REGION,SEXO,ACTIVIDAD"
                ",VALORVEHICULO,FEC_TRANSFERENCIA,COLOR,EDAD,VIGENCIA) values ")
        contador = 0
        for i in archivo:
            contador += 1
            renglon = '('
            renglon += "'" + (i.split(";")[0]).strip() + "',"
            renglon += "'" + (i.split(";")[1]).strip() + "',"
            renglon += "'" + (i.split(";")[2]).strip() + "'," 
            renglon += "'" + (i.split(";")[3]).strip() + "'," 
            renglon += "'" + (i.split(";")[4]).strip() + "'," 
            renglon += "'" + (i.split(";")[5]).strip() + "'," 
            renglon += "'" + (i.split(";")[6]).strip() + "'," 
            renglon += "'" + (i.split(";")[7]).strip() + "'," 
            renglon += "'" + (i.split(";")[8]).strip() + "'," 
            if str((i.split(";")[9])).replace(',','.').strip() == '':
                renglon +=  "0," 
            else:
                renglon += str((i.split(";")[9])).replace(',','.').strip() + "," 
            renglon += "'" + (i.split(";")[10]).strip() + "'," 
            renglon += "'" + (i.split(";")[11]).strip() + "'," 
            renglon += "'" + (i.split(";")[12]).strip() + "'," 
            renglon += "'" + (i.split(";")[13]).strip() + "')," 
            sql += renglon

            if contador == 1000:
                self.con.run_query(sql[:-1])
                sql = str("insert into car_information ("
                "PLACA,MARCA,MODELO,AÑO,ID_CLIENTE,COMUNA,REGION,SEXO,ACTIVIDAD"
                ",VALORVEHICULO,FEC_TRANSFERENCIA,COLOR,EDAD,VIGENCIA) values ")
                print('Lote de',contador,'cargado')
                contador = 0
        self.con.run_query(sql[:-1])
        print('group ',contador,'upload')
        print('Last group finalize')

    def normalice_region_colum(self):
        print('Process normalice column region')
        sql = str(
                "update car_information "
                "inner join region on "
                "(case when char_length(car_information.region) = 1 then "
                        "concat('0', car_information.region) "
                    "else car_information.region "
                    "end) = region.cod_region "
                "set car_information.region = region.name_region;")

        self.con.run_query(sql)

        sql = str(
                "update car_information "
                "set region = 'NO REGION' "
                "where region in ('0','');" )

        self.con.run_query(sql)

        sql = str("update car_information "
                    "set MARCA = 'WITHOUT BRAND' "
                    "WHERE MARCA = '';")
        self.con.run_query(sql)

        sql = str("ALTER TABLE region ADD (cod int);")
        self.con.run_query(sql)  
        
        sql = str("update region "
        "inner join (select ROW_NUMBER() OVER(ORDER BY name_region) as cod, name_region from region) as t1 "
        "on t1.name_region = region.name_region "
        "set region.cod = t1.cod;")    

        self.con.run_query(sql)   

    def insert_information_brand(self):
        print('Process normalice brands')
        sql = str(
                "INSERT INTO marcas (marca) "
                "select distinct MARCA "
                "from car_information;")    

        self.con.run_query(sql)       

        sql = str(
                "update marcas set derco = True "
                "where MARCA IN ('SUZUKI', 'MAZDA', 'RENAULT', 'HAVAL', 'CHANGAN','JAC','JAC MOTORS');")
        self.con.run_query(sql)  

        sql = str(
                "update marcas set derco = False "
                "where MARCA NOT IN ('SUZUKI', 'MAZDA', 'RENAULT', 'HAVAL', 'CHANGAN','JAC','JAC MOTORS');")
        self.con.run_query(sql)  

        sql = str("ALTER TABLE marcas ADD (cod int);")
        
        self.con.run_query(sql)  

        sql = str("update marcas "
        "inner join (select ROW_NUMBER() OVER(ORDER BY marca) as cod, marca from marcas) as t1 "
        "on t1.marca = marcas.marca "
        "set marcas.cod = t1.cod;")    

        self.con.run_query(sql)         



    def insert_information_group_table(self):
        print('Process insert grup information')
        sql = str(
                "insert into group_information "
                "select "
                "car_information.AÑO "
                ",car_information.region "
                ",car_information.MARCA "
                ",marcas.derco "
                ",region.lat "
                ",region.lng "
                ",count(*) as amount "
                ",sum(VALORVEHICULO)/1000000 as values_c "
                "from car_information "
                "left join region " 
                "on car_information.REGION = region.name_region "
                "left join marcas on car_information.marca = marcas.marca "
                "group by 1,2,3,4,5,6 "
                "order by car_information.region, "
                "car_information.MARCA, "
                "sum(VALORVEHICULO) desc;")

        self.con.run_query(sql)







