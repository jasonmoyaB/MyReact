import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { deleteTarea, updateTarea, getTareas } from '../../../services/tareas'
import type { Tarea } from '../../../interfaces/tareas'

export const TareaDetails = () => {
    const { id } = useParams<{ id: string }>()
    const navigate = useNavigate()
    const [tarea, setTarea] = useState<Tarea | null>(null)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState<string | null>(null)
    const [isEditing, setIsEditing] = useState(false)
    const [formData, setFormData] = useState({
        NombreTarea: "",
        DescripcionTarea: "",
        FechaTarea: ""
    })

    useEffect(() => {
        const fetchTarea = async () => {
            if (!id) return
            try {
                const tareas = await getTareas()
                const tareasArray = Array.isArray(tareas) ? tareas : [tareas]
                const tareaFound = tareasArray.find((t: Tarea) => t.IdTarea === parseInt(id))
                if (tareaFound) {
                    setTarea(tareaFound)
                    setFormData({
                        NombreTarea: tareaFound.NombreTarea,
                        DescripcionTarea: tareaFound.DescripcionTarea,
                        FechaTarea: tareaFound.FechaTarea
                    })
                } else {
                    setError("Tarea no encontrada")
                }
            // eslint-disable-next-line @typescript-eslint/no-unused-vars
            } catch (err) {
                setError("Error al cargar la tarea")
            } finally {
                setLoading(false)
            }
        }

        fetchTarea()
    }, [id])

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
        setError(null)
    }

    const handleUpdate = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!id || !tarea) return

        try {
            setError(null)
            await updateTarea(parseInt(id), formData.NombreTarea, formData.DescripcionTarea, formData.FechaTarea)
            setIsEditing(false)
            setTarea({
                ...tarea,
                NombreTarea: formData.NombreTarea,
                DescripcionTarea: formData.DescripcionTarea,
                FechaTarea: formData.FechaTarea
            })
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError("Error al actualizar la tarea")
            }
        }
    }

    const handleDelete = async () => {
        if (!id || !window.confirm("¿Estás seguro de que deseas eliminar esta tarea?")) return

        try {
            setError(null)
            await deleteTarea(parseInt(id))
            navigate("/Tareas")
        } catch (err) {
            if (err instanceof Error) {
                setError(err.message)
            } else {
                setError("Error al eliminar la tarea")
            }
        }
    }

    if (loading) return <p>Cargando...</p>
    if (!tarea) return <p>{error || "Tarea no encontrada"}</p>

    return (
        <div className="container mt-4">
            <div className="card">
                <div className="card-header d-flex justify-content-between align-items-center">
                    <h3>{tarea.NombreTarea}</h3>
                    <button 
                        className="btn btn-secondary btn-sm"
                        onClick={() => navigate("/Tareas")}
                    >
                        Volver
                    </button>
                </div>
                <div className="card-body">
                    {error && <div className="alert alert-danger" role="alert">{error}</div>}

                    {!isEditing ? (
                        <div>
                            <p><strong>ID:</strong> {tarea.IdTarea}</p>
                            <p><strong>Nombre:</strong> {tarea.NombreTarea}</p>
                            <p><strong>Descripción:</strong> {tarea.DescripcionTarea}</p>
                            <p><strong>Fecha:</strong> {tarea.FechaTarea}</p>
                            
                            <div className="mt-4 d-flex gap-2">
                                <button 
                                    className="btn btn-primary"
                                    onClick={() => setIsEditing(true)}
                                >
                                    Editar
                                </button>
                                <button 
                                    className="btn btn-danger"
                                    onClick={handleDelete}
                                >
                                    Eliminar
                                </button>
                            </div>
                        </div>
                    ) : (
                        <form onSubmit={handleUpdate}>
                            <div className="mb-3">
                                <label htmlFor="NombreTarea" className="form-label">Nombre de la tarea</label>
                                <input 
                                    type="text" 
                                    className="form-control" 
                                    id="NombreTarea" 
                                    name="NombreTarea" 
                                    value={formData.NombreTarea} 
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="DescripcionTarea" className="form-label">Descripción</label>
                                <textarea 
                                    className="form-control" 
                                    id="DescripcionTarea" 
                                    name="DescripcionTarea" 
                                    value={formData.DescripcionTarea} 
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="FechaTarea" className="form-label">Fecha</label>
                                <input 
                                    type="date" 
                                    className="form-control" 
                                    id="FechaTarea" 
                                    name="FechaTarea" 
                                    value={formData.FechaTarea} 
                                    onChange={handleChange}
                                    required 
                                />
                            </div>
                            <div className="d-flex gap-2">
                                <button type="submit" className="btn btn-success">Guardar Cambios</button>
                                <button 
                                    type="button" 
                                    className="btn btn-secondary"
                                    onClick={() => {
                                        setIsEditing(false)
                                        setError(null)
                                    }}
                                >
                                    Cancelar
                                </button>
                            </div>
                        </form>
                    )}
                </div>
            </div>
        </div>
    )
}
