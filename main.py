import sqlite3

"""
try:
    sqlite_connection = sqlite3.connect('data.db')
    cursor = sqlite_connection.cursor()
    print("База данных создана и успешно подключена к SQLite")

    sqlite_select_query = "select sqlite_version();"
    cursor.execute(sqlite_select_query)
    record = cursor.fetchall()
    print("Версия базы данных SQLite: ", record)
    cursor.close()

except sqlite3.Error as error:
    print("Ошибка при подключении к sqlite", error)
finally:
    if (sqlite_connection):
        sqlite_connection.close()
        print("Соединение с SQLite закрыто")



try:
    sqlite_connection = sqlite3.connect('data.db')
    sqlite_create_table_query = '''CREATE TABLE Like (
                                product_id INTEGER NOT NULL,                                
                                seller_id INTEGER NOT NULL);'''
    cursor = sqlite_connection.cursor()
    print("База данных подключена к SQLite")
    cursor.execute(sqlite_create_table_query)
    sqlite_connection.commit()
    print("Таблица SQLite создана")

    cursor.close()

except sqlite3.Error as error:
    print("Ошибка при подключении к sqlite", error)
finally:
    if (sqlite_connection):
        sqlite_connection.close()
        print("Соединение с SQLite закрыто")



try:
    sqlite_connection = sqlite3.connect('data.db')
    sqlite_create_table_query = '''CREATE TABLE Product (
                                product_id INTEGER PRIMARY KEY AUTOINCREMENT,
                                product_name TEXT NOT NULL,
                                product_description TEXT,                                
                                product_price INTEGER NOT NULL,
                                product_image TEXT,
                                product_comment TEXT,
                                category_id INTEGER NOT NULL,
                                seller_id INTEGER NOT NULL,
                                status_id INTEGER NOT NULL,
                                FOREIGN KEY (product_id)  REFERENCES Like (product_id) 
                                ON DELETE CASCADE 
                                ON UPDATE CASCADE);'''
    cursor = sqlite_connection.cursor()
    print("База данных подключена к SQLite")
    cursor.execute(sqlite_create_table_query)
    sqlite_connection.commit()
    print("Таблица SQLite создана")

    cursor.close()

except sqlite3.Error as error:
    print("Ошибка при подключении к sqlite", error)
finally:
    if (sqlite_connection):
        sqlite_connection.close()
        print("Соединение с SQLite закрыто")



try:
    sqlite_connection = sqlite3.connect('data.db')
    sqlite_create_table_query = '''CREATE TABLE Category (
                                category_id INTEGER PRIMARY KEY AUTOINCREMENT,
                                category_name TEXT NOT NULL,
                                FOREIGN KEY (category_id)  REFERENCES Product (category_id) 
                                ON DELETE CASCADE 
                                ON UPDATE CASCADE);'''
    cursor = sqlite_connection.cursor()
    print("База данных подключена к SQLite")
    cursor.execute(sqlite_create_table_query)
    sqlite_connection.commit()
    print("Таблица SQLite создана")

    cursor.close()

except sqlite3.Error as error:
    print("Ошибка при подключении к sqlite", error)
finally:
    if (sqlite_connection):
        sqlite_connection.close()
        print("Соединение с SQLite закрыто")



try:
    sqlite_connection = sqlite3.connect('data.db')
    sqlite_create_table_query = '''CREATE TABLE Status (
                                status_id INTEGER PRIMARY KEY AUTOINCREMENT,                                
                                status_name TEXT NOT NULL,
                                FOREIGN KEY (status_id)  REFERENCES Product (status_id) 
                                ON DELETE CASCADE 
                                ON UPDATE CASCADE);'''
    cursor = sqlite_connection.cursor()
    print("База данных подключена к SQLite")
    cursor.execute(sqlite_create_table_query)
    sqlite_connection.commit()
    print("Таблица SQLite создана")

    cursor.close()

except sqlite3.Error as error:
    print("Ошибка при подключении к sqlite", error)
finally:
    if (sqlite_connection):
        sqlite_connection.close()
        print("Соединение с SQLite закрыто")


try:
    sqlite_connection = sqlite3.connect('data.db')
    sqlite_create_table_query = '''CREATE TABLE Seller (
                                seller_id INTEGER PRIMARY KEY AUTOINCREMENT,                                
                                seller_login TEXT NOT NULL, 
                                seller_password INTEGER NOT NULL, 
                                seller_telephone INTEGER, 
                                seller_name TEXT,
                                FOREIGN KEY (seller_id)  REFERENCES Like (seller_id) 
                                ON DELETE CASCADE 
                                ON UPDATE CASCADE);'''
    cursor = sqlite_connection.cursor()
    print("База данных подключена к SQLite")
    cursor.execute(sqlite_create_table_query)
    sqlite_connection.commit()
    print("Таблица SQLite создана")

    cursor.close()

except sqlite3.Error as error:
    print("Ошибка при подключении к sqlite", error)
finally:
    if (sqlite_connection):
        sqlite_connection.close()
        print("Соединение с SQLite закрыто")
"""

"""
# Устанавливаем соединение с базой данных
connection = sqlite3.connect('data.db')
cursor = connection.cursor()

# Добавляем записи
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (1, 'Конспекты лекций'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (2, 'Военная форма'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (3, 'Варианты контрольных'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (4, 'Прорешенные контрольные'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (5, 'Бу техника для общежития'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (6, 'Бу мебель для общежития'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (7, 'Материалы по предметам (презентации, методички)'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (8, 'Расписанные билеты к экзаменам'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (9, 'Тетрадки для практик с решенными задачами'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (10, 'Решённые курсовые работы'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (11, 'Готовые лабораторные работы'))
cursor.execute('INSERT INTO Category (category_id, category_name) VALUES (?, ?)', (12, 'Возможность распечатать файл'))

# Сохраняем изменения и закрываем соединение
connection.commit()
connection.close()

"""

"""
connection = sqlite3.connect('data.db')
cursor = connection.cursor()
cursor.execute('INSERT INTO Status (status_id, status_name) VALUES (?, ?)', (1, 'Продается'))
cursor.execute('INSERT INTO Status (status_id, status_name) VALUES (?, ?)', (2, 'Забронировано'))
connection.commit()
connection.close()
"""

connection = sqlite3.connect('data.db')
cursor = connection.cursor()
cursor.execute("SELECT * FROM Category")
print(cursor.fetchall())
cursor.execute("SELECT category_name FROM Category")
print(cursor.fetchall())
connection.commit()
connection.close()