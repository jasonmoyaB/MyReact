import React, { useEffect } from 'react'

import { Headerside } from './components/Headerside'
import {getTareas, deleteTarea, updateTarea} from '../../services/tareas'
import type {Tarea} from '../../interfaces/tareas'



export const TareasPage = () => {

    const [tareas, setTareas] = React.useState<Tarea[]>([])
    const [loading, setLoading] = React.useState(false)
    const [editingId, setEditingId] = React.useState<number | null>(null)
    const [formData, setFormData] = React.useState({ nombre: '', descripcion: '', fecha: '' })
    
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

  const handleDelete = async (id: number) => {
    if (window.confirm('¿Estás seguro de que deseas eliminar esta tarea?')) {
      try {
        await deleteTarea(id);
        setTareas(tareas.filter(t => t.IdTarea !== id));
      } catch (error) {
        console.error(error);
      }
    }
  }

  const handleEdit = (tarea: Tarea) => {
    setEditingId(tarea.IdTarea);
    setFormData({
      nombre: tarea.NombreTarea,
      descripcion: tarea.DescripcionTarea,
      fecha: tarea.FechaTarea
    });
  }

  const handleSaveEdit = async (id: number) => {
    try {
      await updateTarea(id, formData.nombre, formData.descripcion, formData.fecha);
      setTareas(tareas.map(t => 
        t.IdTarea === id 
          ? { ...t, NombreTarea: formData.nombre, DescripcionTarea: formData.descripcion, FechaTarea: formData.fecha }
          : t
      ));
      setEditingId(null);
    } catch (error) {
      console.error(error);
    }
  }

  const handleCancel = () => {
    setEditingId(null);
    setFormData({ nombre: '', descripcion: '', fecha: '' });
  }

    if (loading) return <div className="text-center mt-5"><span className="spinner-border"></span></div>
  return (
    <div>
        <Headerside />
        <div className="container mt-5">
          <div className="row mb-4">
            <div className="col-12">
              <h1 className="display-5 text-primary mb-4">Gestión de Tareas</h1>
            </div>
          </div>
          
          {tareas.length === 0 ? (
            <div className="alert alert-info text-center">No hay tareas disponibles</div>
          ) : (
            <div className="table-responsive">
              <table className="table table-striped table-hover shadow-sm">
                <thead className="table-dark">
                  <tr>
                    <th>ID</th>
                    <th>Nombre</th>
                    <th>Descripción</th>
                    <th>Fecha</th>
                    <th className="text-center">Acciones</th>
                  </tr>
                </thead>
                <tbody>
                  {tareas.map((tarea) => (
                    <tr key={tarea.IdTarea} className={editingId === tarea.IdTarea ? 'table-warning' : ''}>
                      <td className="align-middle">
                        <span className="badge bg-secondary">{tarea.IdTarea}</span>
                      </td>
                      <td className="align-middle">
                        {editingId === tarea.IdTarea ? (
                          <input 
                            type="text" 
                            className="form-control form-control-sm"
                            value={formData.nombre}
                            onChange={(e) => setFormData({...formData, nombre: e.target.value})}
                          />
                        ) : (
                          tarea.NombreTarea
                        )}
                      </td>
                      <td className="align-middle">
                        {editingId === tarea.IdTarea ? (
                          <input 
                            type="text" 
                            className="form-control form-control-sm"
                            value={formData.descripcion}
                            onChange={(e) => setFormData({...formData, descripcion: e.target.value})}
                          />
                        ) : (
                          <small>{tarea.DescripcionTarea}</small>
                        )}
                      </td>
                      <td className="align-middle">
                        {editingId === tarea.IdTarea ? (
                          <input 
                            type="date" 
                            className="form-control form-control-sm"
                            value={formData.fecha}
                            onChange={(e) => setFormData({...formData, fecha: e.target.value})}
                          />
                        ) : (
                          <small>{new Date(tarea.FechaTarea).toLocaleDateString()}</small>
                        )}
                      </td>
                      <td className="align-middle text-center">
                        {editingId === tarea.IdTarea ? (
                          <div className="gap-2 d-flex flex-wrap">
                            <button 
                              className="btn btn-sm btn-success"
                              onClick={() => handleSaveEdit(tarea.IdTarea)}
                            >
                              <i className="bi bi-check"></i> Guardar
                            </button>
                            <button 
                              className="btn btn-sm btn-secondary"
                              onClick={handleCancel}
                            >
                              <i className="bi bi-x"></i> Cancelar
                            </button>
                          </div>
                        ) : (
                          <div className="gap-2 d-flex flex-wrap">
                            <button 
                              className="btn btn-sm btn-warning"
                              onClick={() => handleEdit(tarea)}
                            >
                              <i className="bi bi-pencil"></i> Editar
                            </button>
                            <button 
                              className="btn btn-sm btn-danger"
                              onClick={() => handleDelete(tarea.IdTarea)}
                            >
                              <i className="bi bi-trash"></i> Eliminar
                            </button>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          )}
        </div>
    </div>
  )
}

