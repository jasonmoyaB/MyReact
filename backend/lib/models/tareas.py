from sqlalchemy import Column, Integer, String, DateTime
from sqlalchemy.orm import declarative_base
from datetime import datetime

Base = declarative_base()

class Tarea(Base):
    __tablename__ = "tareas"

    IdTarea = Column(Integer, primary_key=True, index=True)
    NombreTarea = Column(String(50), nullable=False)
    DescripcionTarea = Column(String(200))
    FechaTarea = Column(DateTime, default=datetime.utcnow)