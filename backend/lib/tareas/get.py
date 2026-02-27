from fastapi import Depends
from sqlalchemy.orm import Session
from database import get_db
from lib.models.tareas import Tarea

def get_tarea(tarea_id: int, db: Session = Depends(get_db)):
    return db.query(Tarea).filter(Tarea.IdTarea == tarea_id).first()