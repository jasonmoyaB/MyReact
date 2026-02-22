const API_URL = "http://127.0.0.1:8000";

export const getTareas = async () =>{
    const response = await fetch(`${API_URL}/tareas`);

    if(!response.ok){
        throw new Error("Error al obtener las tareas");
    }
    return response.json();

}

export const createTarea = async (nombre: string, descripcion: string, fecha: string) => {
    const response = await fetch(`${API_URL}/tareas?nombre=${nombre}&descripcion=${descripcion}&fecha=${fecha}`, {
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
    const response = await fetch(`${API_URL}/tareas/${id}?nombre=${nombre}&descripcion=${descripcion}&fecha=${fecha}`, {
        method: "PUT"
    });
    if(!response.ok){
        throw new Error("Error al actualizar la tarea");
    }
    return response.json();
}