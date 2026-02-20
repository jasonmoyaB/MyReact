from sqlalchemy.orm import Session
from lib.models.tareas import Tarea

def create(db: Session, nombre: str, descripcion: str, fecha):
    nueva_tarea = Tarea(
        NombreTarea=nombre,
        DescripcionTarea=descripcion,
        FechaTarea=fecha
    )

    db.add(nueva_tarea)
    db.commit()
    db.refresh(nueva_tarea)

    return nueva_tarea
