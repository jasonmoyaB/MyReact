from fastapi import FastAPI, Depends
from sqlalchemy.orm import Session
from datetime import date
from fastapi.middleware.cors import CORSMiddleware

from database import engine, get_db
from lib.models.tareas import Base, Tarea
from lib.tareas.create import create as create_tarea
from lib.tareas.list import list_all as list_tareas
from lib.usuarios.create import create as create_usuario
from lib.usuarios.list import list_all as list_usuarios
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
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

@app.delete("/tareas/{tarea_id}")
def eliminar_tarea_endpoint(tarea_id: int, db: Session = Depends(get_db)):
    tarea = db.query(Tarea).filter(Tarea.IdTarea == tarea_id).first()
    if tarea:
        db.delete(tarea)
        db.commit()
        return {"message": "Tarea eliminada"}
    else:
        return {"message": "Tarea no encontrada"}
    
@app.put("/tareas/{tarea_id}")
def actualizar_tarea_endpoint(tarea_id: int, nombre: str, descripcion: str, fecha: date, db: Session = Depends(get_db)):
    tarea = db.query(Tarea).filter(Tarea.IdTarea == tarea_id).first()
    if tarea:
        tarea.NombreTarea = nombre
        tarea.DescripcionTarea = descripcion
        tarea.FechaTarea = fecha
        db.commit()
        return tarea
    else:
        return {"message": "Tarea no encontrada"}
# ----- USUARIOS -----

@app.post("/usuarios")
def crear_usuario_endpoint(nombre: str, correo: str, db: Session = Depends(get_db)):
    return create_usuario(db, nombre, correo)

@app.get("/usuarios")
def listar_usuarios_endpoint(db: Session = Depends(get_db)):
    return list_usuarios(db)