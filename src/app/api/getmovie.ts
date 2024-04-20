

const API_URL = process.env.NEXT_PUBLIC_API_URL;
export const getmovie = async() =>{
    try {
        const res = await fetch(`${API_URL}/getda`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
            },
        });
        // Verificar si la respuesta es exitosa (código 200)
        // Parsear la respuesta como JSON
        const movies = await res.json();
        return movies;
    } catch (error) {
        console.log(error);
        throw error; // Re-lanzar el error para que pueda ser manejado por el código que llama a esta función
    }
};