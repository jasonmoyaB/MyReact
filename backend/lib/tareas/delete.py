from sqlalchemy.orm import Session
from lib.models.tareas import Tarea

def delete(db: Session, tarea_id: int):
    tarea = db.query(Tarea).filter(Tarea.IdTarea == tarea_id).first()
    if tarea:
        db.delete(tarea)
        db.commit()
        return True
    return False