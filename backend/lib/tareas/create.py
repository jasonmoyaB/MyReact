from fastapi import Depends
from sqlalchemy.orm import Session
from datetime import datetime
from database import get_db
from lib.models.tareas import Tarea

def create(db: Session, nombre: str, descripcion: str, fecha: datetime):
    nueva_tarea = Tarea(NombreTarea=nombre, DescripcionTarea=descripcion, FechaTarea=fecha)
    db.add(nueva_tarea)
    db.commit()
    db.refresh(nueva_tarea)
    return nueva_tarea
