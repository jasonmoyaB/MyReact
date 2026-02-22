import React from 'react'

import {createTarea} from '../../services/tareas'

import { useNavigate } from 'react-router-dom'


export const TareasForm = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = React.useState({
        NombreTarea: "",
        DescripcionTarea: "",
        FechaTarea: ""
    })
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }
const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();

  try {
    await createTarea(
      formData.NombreTarea,
      formData.DescripcionTarea,
      formData.FechaTarea
    );
    navigate("/Tareas");
  } catch (error) {
    console.error(error);
  }
};
  return (
    <div>
        <h1>Crear Tarea</h1>
        <form onSubmit={handleSubmit}>
            <div className="mb-3">
                <label htmlFor="NombreTarea" className="form-label">Nombre de la tarea</label>
                <input type="text" className="form-control" id="NombreTarea" name="NombreTarea" value={formData.NombreTarea} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="DescripcionTarea" className="form-label">Descripción de la tarea</label>
                <input type="text" className="form-control" id="DescripcionTarea" name="DescripcionTarea" value={formData.DescripcionTarea} onChange={handleChange} required />
            </div>
            <div className="mb-3">
                <label htmlFor="FechaTarea" className="form-label">Fecha de la tarea</label>
                <input type="date" className="form-control" id="FechaTarea" name="FechaTarea" value={formData.FechaTarea} onChange={handleChange} required />
            </div>
            <button type="submit" className="btn btn-primary">Crear Tarea</button>
        </form>
    </div>
  )
}