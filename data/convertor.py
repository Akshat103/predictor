import sqlite3
import csv
import os

def csv_to_sqlite(db_name, csv_file_path, table_name):
    conn = sqlite3.connect(db_name)
    cursor = conn.cursor()
    
    cursor.execute(f'''
    CREATE TABLE IF NOT EXISTS {table_name} (
        SNo INTEGER PRIMARY KEY AUTOINCREMENT,
        InstituteType TEXT,
        InstituteName TEXT,
        Branch TEXT,
        Class TEXT,
        Gender TEXT,
        Category TEXT,
        MPDomicile TEXT,
        OpeningRank INTEGER,
        ClosingRank INTEGER
    )
    ''')
    
    with open(csv_file_path, 'r') as csv_file:
        csv_reader = csv.DictReader(csv_file)
        
        for row in csv_reader:
            cursor.execute(f'''
            INSERT INTO {table_name} (InstituteType, InstituteName, Branch, Class, Gender, Category, MPDomicile, OpeningRank, ClosingRank)
            VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)
            ''', (
                row['InstituteType'],
                row['InstituteName'],
                row['Branch'],
                row['Class'],
                row['Gender'],
                row['Category'],
                row['MPDomicile'],
                row['OpeningRank'],
                row['ClosingRank']
            ))
    
    conn.commit()
    conn.close()

if __name__ == "__main__":
    db_name = 'predictor.db'
    csv_file_path = 'csv/colleges.csv'
    table_name = 'colleges'
    
    csv_to_sqlite(db_name, csv_file_path, table_name)
    print(f"CSV file '{csv_file_path}' has been converted to SQLite database '{db_name}', table '{table_name}'.")
