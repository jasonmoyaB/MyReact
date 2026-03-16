from datetime import datetime
import unittest

from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from sqlalchemy.pool import StaticPool

from lib.models.tareas import Base, Tarea
from lib.tareas.get import get_tarea
from lib.tareas.router import obtener_tarea_endpoint


def create_test_session_factory() -> sessionmaker:
	engine = create_engine(
		"sqlite://",
		connect_args={"check_same_thread": False},
		poolclass=StaticPool,
	)
	Base.metadata.create_all(bind=engine)
	return sessionmaker(bind=engine)


def seed_tarea(session_factory: sessionmaker) -> Tarea:
	db = session_factory()
	try:
		tarea = Tarea(
			NombreTarea="Preparar demo",
			DescripcionTarea="Validar el endpoint GET de tareas",
			FechaTarea=datetime(2026, 3, 12, 10, 30, 0),
		)
		db.add(tarea)
		db.commit()
		db.refresh(tarea)
		return tarea
	finally:
		db.close()


class TareasGetTests(unittest.TestCase):
	def test_obtener_tarea_por_id_devuelve_la_tarea_esperada(self):
		session_factory = create_test_session_factory()
		tarea = seed_tarea(session_factory)
		db = session_factory()

		try:
			tarea_encontrada = get_tarea(tarea.IdTarea, db)
			self.assertIsNotNone(tarea_encontrada)

			respuesta = obtener_tarea_endpoint(tarea.IdTarea, db)

			self.assertEqual(respuesta.IdTarea, tarea.IdTarea)
			self.assertEqual(respuesta.NombreTarea, "Preparar demo")
			self.assertEqual(respuesta.DescripcionTarea, "Validar el endpoint GET de tareas")
			self.assertEqual(respuesta.FechaTarea, datetime(2026, 3, 12, 10, 30, 0))
		finally:
			db.close()
