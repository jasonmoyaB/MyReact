from database import engine
from lib.models.tareas import Base
from lib.models.usuarios import Usuario
from lib.models.tareas import Tarea
from sqlalchemy import text

# Elimina todas las tablas con CASCADE
with engine.connect() as conn:
    conn.execute(text("DROP TABLE IF EXISTS tareas CASCADE"))
    conn.execute(text("DROP TABLE IF EXISTS usuarios CASCADE"))
    conn.commit()

# Recrea todas las tablas con el esquema original
Base.metadata.create_all(bind=engine)

print("✅ Base de datos recreada con el esquema original")
