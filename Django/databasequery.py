import psycopg2
import os
from urllib import parse

database_url = "postgres://mmxebhgd:blMeabB36ifR0kVgKbTHF9AZdhq8U19-@rain.db.elephantsql.com/mmxebhgd"

try:
    url = parse.urlparse(database_url)
    conn = psycopg2.connect(
        database=url.path[1:],
        user=url.username,
        password=url.password,
        host=url.hostname,
        port=url.port
    )
    print("Connected to the database")
except Exception as error:
    print("Error:", error)
    
cur = conn.cursor()
cur.execute("")
cur.close()