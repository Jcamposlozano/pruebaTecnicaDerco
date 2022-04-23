import pymysql.cursors
from db_datos import Db_datos


class UploadInformation:
    
    def __init__(self):
        self.con = Db_datos()

    def execute_process(self):
        self.create_table()
        self.insert_information()

    def create_table(self):
        sql = str("DROP TABLE IF EXISTS car_information;")\
        
        self.con.run_query(sql)

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
        print('Lote de',contador,'cargado')
        print('Ultimo lote')

