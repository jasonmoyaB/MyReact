from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware

from database import engine
from lib.models.tareas import Base
from lib.tareas.router import router as tareas_router
from lib.usuarios.router import router as usuarios_router

app = FastAPI()

Base.metadata.create_all(bind=engine)
app.add_middleware(
    CORSMiddleware,
    allow_origins=["*"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def root():
    return {"message": "API is working!"}

app.include_router(tareas_router)
app.include_router(usuarios_router)