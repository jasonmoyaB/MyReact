from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from datetime import date
from fastapi.middleware.cors import CORSMiddleware

from database import engine, get_db
from lib.models.tareas import Base
from lib.tareas.create import create as create_tarea
from lib.tareas.list import list_all as list_tareas
from lib.usuarios.create import create as create_usuario
from lib.usuarios.list import list_all as list_usuarios

app = FastAPI()

Base.metadata.create_all(bind=engine)

@app.get("/")
def root():
    return {"message": "API is working!"}


# ----- TAREAS -----

@app.post("/tareas")
def crear_tarea_endpoint(nombre: str, descripcion: str, fecha: date, db: Session = Depends(get_db)):
    return create_tarea(db, nombre, descripcion, fecha)

@app.get("/tareas")
def listar_tareas_endpoint(db: Session = Depends(get_db)):
    return list_tareas(db)


# ----- USUARIOS -----

@app.post("/usuarios")
def crear_usuario_endpoint(nombre: str, correo: str, db: Session = Depends(get_db)):
    return create_usuario(db, nombre, correo)

@app.get("/usuarios")
def listar_usuarios_endpoint(db: Session = Depends(get_db)):
    return list_usuarios(db)