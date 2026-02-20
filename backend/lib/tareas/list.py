from sqlalchemy.orm import Session
from lib.models.tareas import Tarea
def list_all(db: Session):
    tareas = db.query(Tarea).all()
    return tareas