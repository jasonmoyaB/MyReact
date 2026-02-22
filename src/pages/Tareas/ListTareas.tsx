import React, { useEffect } from 'react'

import { Headerside } from './components/Headerside'
import {getTareas} from '../../services/tareas'
import type {Tarea} from '../../interfaces/tareas'



export const TareasPage = () => {

    const [tareas, setTareas] = React.useState<Tarea[]>([])
    const [loading, setLoading] = React.useState(false)
    
     useEffect(() => {
    const fetchTareas = async () => {
      try {
        const data = await getTareas();
        setTareas(data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchTareas();
  }, []);
    if (loading) return <p>Cargando...</p>
  return (
    <div>
        <Headerside />
        <table className="table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Nombre</th>
          <th>Descripción</th>
          <th>Fecha</th>
        </tr>
      </thead>
      <tbody>
        {tareas.map((tarea) => (
          <tr key={tarea.IdTarea}>
            <td>{tarea.IdTarea}</td>
            <td>{tarea.NombreTarea}</td>
            <td>{tarea.DescripcionTarea}</td>
            <td>{tarea.FechaTarea}</td>
          </tr>
        ))}
      </tbody>
    </table>
       
      
    </div>
  )
}

