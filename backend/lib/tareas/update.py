from sqlalchemy.orm import Session
from datetime import datetime
from lib.models.tareas import Tarea

def update(db: Session, tarea_id: int, nombre: str, descripcion: str, fecha: datetime):
    tarea = db.query(Tarea).filter(Tarea.IdTarea == tarea_id).first()
    if tarea:
        tarea.NombreTarea = nombre
        tarea.DescripcionTarea = descripcion
        tarea.FechaTarea = fecha
        db.commit()
        db.refresh(tarea)
    return tarea