from sqlalchemy import Column, Integer, String, ForeignKey
from sqlalchemy.orm import relationship
from lib.models.tareas import Base

class Pet(Base):
    __tablename__ = "pets"

    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(50), nullable=False)
    owner_id = Column(Integer, ForeignKey('usuarios.IdUsuario'), nullable=False)

    owner = relationship("Usuario", back_populates="pets")