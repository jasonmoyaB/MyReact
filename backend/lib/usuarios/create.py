from sqlalchemy.orm import Session
from lib.models.usuarios import Usuario

def create(db: Session, nombre: str, correo: str):
    nuevo_usuario = Usuario(
        NombreUsuario=nombre,
        CorreoUsuario=correo
    )

    db.add(nuevo_usuario)
    db.commit()
    db.refresh(nuevo_usuario)

    return nuevo_usuario