from sqlalchemy.orm import Session
from lib.models.usuarios import Usuario

def list_all(db: Session):
    usuarios = db.query(Usuario).all()
    return usuarios