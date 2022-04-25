#import MySQLdb
import pymysql
import datetime
import os
from datetime import date

class Db_datos():

    def __init__(self):
        self.DB_HOST = 'localhost' 
        self.DB_USER = 'root'
        self.DB_PASS = 'prueba_tecnicas'
        self.DB_NAME = 'db_data'
        
    def run_query(self, query=''): 
        con = pymysql.connect(host=self.DB_HOST,
                user=self.DB_USER,
                password=self.DB_PASS,
                db=self.DB_NAME,
                cursorclass=pymysql.cursors.DictCursor)
        try:
            with con.cursor() as cur:
                if query.upper().startswith('SELECT') or query.upper().startswith('WITH'): 
                    cur.execute(query)
                    data = cur.fetchall()   # Traer los resultados de un select 
                else: 
                    cur.execute(query)       # Hacer efectiva la escritura de datos 
                    con.commit()
                    data = None     
            cur.close()                 # Cerrar el cursor 
            con.close()                   # Cerrar la conexión 
            return data
        except Exception as e:
            print(str(e))