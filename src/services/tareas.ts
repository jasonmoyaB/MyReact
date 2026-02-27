const API_URL = "http://127.0.0.1:8000";

// Función para convertir fecha de input a formato ISO sin problemas de zona horaria
const formatFechaParaAPI = (fechaString: string): string => {
  // Si recibimos una fecha del tipo "2026-02-26T12:34:56.000Z", extraer solo la fecha
  if (fechaString.includes("T")) {
    return fechaString.split("T")[0];
  }
  // Si es solo "2026-02-26", devolver tal cual pero con T00:00:00Z para UTC
  return `${fechaString}T00:00:00Z`;
};

export const getTareas = async () =>{
    const response = await fetch(`${API_URL}/tareas`);

    if(!response.ok){
        throw new Error("Error al obtener las tareas");
    }
    return response.json();

}

export const createTarea = async (nombre: string, descripcion: string, fecha: string) => {
    const fechaFormato = formatFechaParaAPI(fecha);
    const response = await fetch(`${API_URL}/tareas?nombre=${nombre}&descripcion=${descripcion}&fecha=${fechaFormato}`, {
        method: "POST"
    });

    if(!response.ok){
        throw new Error("Error al crear la tarea");
    }
    return response.json();
}

export const deleteTarea = async (id: number) => {
    const response = await fetch(`${API_URL}/tareas/${id}`, {
        method: "DELETE"
    });

    if(!response.ok){
        throw new Error("Error al eliminar la tarea");
    }
    return response.json();
}

export const updateTarea = async (id: number, nombre: string, descripcion: string, fecha: string) => {
    const fechaFormato = formatFechaParaAPI(fecha);
    const response = await fetch(`${API_URL}/tareas/${id}?nombre=${nombre}&descripcion=${descripcion}&fecha=${fechaFormato}`, {
        method: "PUT"
    });
    if(!response.ok){
        throw new Error("Error al actualizar la tarea");
    }
    return response.json();
}