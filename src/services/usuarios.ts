const API_URL = "http://127.0.0.1:8000";

export const getUserStatus = async () => {
    const response = await fetch(`${API_URL}/user-status`);

    if(!response.ok){
        throw new Error("Error al obtener el estado del usuario");
    }
    return response.json();
}