from sqlalchemy import Column, Integer, String, Date
from sqlalchemy.orm import relationship
from lib.models.tareas import Base

class Usuario(Base):
    __tablename__ = "usuarios"

    IdUsuario = Column(Integer, primary_key=True, index=True)
    NombreUsuario = Column(String(50), nullable=False)
    CorreoUsuario = Column(String(100), unique=True, nullable=False)
    pets = relationship("Pet", back_populates="owner")