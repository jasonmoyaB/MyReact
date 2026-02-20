from sqlalchemy import Column, Integer, String, Date
from lib.models.tareas import Base

class Usuario(Base):
    __tablename__ = "usuarios"

    IdUsuario = Column(Integer, primary_key=True, index=True)
    NombreUsuario = Column(String(50), nullable=False)
    CorreoUsuario = Column(String(100), unique=True, nullable=False)