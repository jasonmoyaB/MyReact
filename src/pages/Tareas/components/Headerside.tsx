import { Link } from "react-router-dom"

export const Headerside = () => {
  return (
    <div>
        <div className="d-flex justify-content-between align-items-center mb-4">
            <h1 className="mb-0">Tareas</h1>
            <Link to="/Tareas/Crear" className="btn btn-primary">
                Crear Tarea
            </Link>
        </div>
    </div>
  )
}
