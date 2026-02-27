from fastapi import APIRouter

router = APIRouter(prefix="/usuarios", tags=["usuarios"])

@router.get("/")
def get_usuarios():
    return {"usuarios": []}