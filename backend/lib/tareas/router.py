from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
from datetime import datetime
import pytz
from pydantic import BaseModel

from database import get_db
from lib.tareas.create import create as create_tarea
from lib.tareas.list import list_all as list_tareas
from lib.tareas.update import update as update_tarea
from lib.tareas.delete import delete as delete_tarea

router = APIRouter(prefix="/tareas", tags=["tareas"])

class TareaResponse(BaseModel):
    IdTarea: int
    NombreTarea: str
    DescripcionTarea: str
    FechaTarea: datetime
    
    class Config:
        from_attributes = True

def parse_fecha(fecha_str: str) -> datetime:
    """Parsea una fecha en formato ISO y la convierte a datetime UTC"""
    try:
        if "Z" in fecha_str:
            return datetime.fromisoformat(fecha_str.replace("Z", "+00:00"))
        elif "T" in fecha_str:
            parsed = datetime.fromisoformat(fecha_str)
            if parsed.tzinfo is None:
                parsed = pytz.UTC.localize(parsed)
            else:
                parsed = parsed.astimezone(pytz.UTC)
            return parsed
        else:
            parsed = datetime.fromisoformat(fecha_str)
            if parsed.tzinfo is None:
                parsed = pytz.UTC.localize(parsed)
            return parsed
    except:
        return datetime.fromisoformat(fecha_str)

@router.post("", response_model=TareaResponse)
def crear_tarea_endpoint(nombre: str, descripcion: str, fecha: str, db: Session = Depends(get_db)):
    fecha_obj = parse_fecha(fecha)
    return create_tarea(db, nombre, descripcion, fecha_obj)

@router.get("", response_model=list[TareaResponse])
def listar_tareas_endpoint(db: Session = Depends(get_db)):
    return list_tareas(db)

@router.delete("/{tarea_id}")
def eliminar_tarea_endpoint(tarea_id: int, db: Session = Depends(get_db)):
    if delete_tarea(db, tarea_id):
        return {"message": "Tarea eliminada"}
    else:
        return {"message": "Tarea no encontrada"}

@router.put("/{tarea_id}", response_model=TareaResponse)
def actualizar_tarea_endpoint(tarea_id: int, nombre: str, descripcion: str, fecha: str, db: Session = Depends(get_db)):
    fecha_obj = parse_fecha(fecha)
    return update_tarea(db, tarea_id, nombre, descripcion, fecha_obj)