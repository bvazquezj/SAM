import { useState } from "react";
import Header from "./basics/Header"
import ResultsEmotions from "./ResultsEmotions";
import EmotionRecommendations from "./EmotionRecommendations.jsx";

export default function HomePage() {

    const [emotionData, setEmotionData] = useState([]);
    const [videoUrl, setVideoUrl] = useState('');
    const [error, setError] = useState(null);

    const apiKey = 'AIzaSyARK8j3NlFCfLtjLSuTnvUkHlKZJGKvc44'; // Tu clave de API

    // Función para extraer el ID del video de un enlace de YouTube
    const extractVideoId = (url) => {
        const regex = /(?:https?:\/\/)?(?:www\.)?youtube\.com\/.*v=([^&]+)|youtu\.be\/([^?&]+)/;
        const match = url.match(regex);
        return match ? (match[1] || match[2]) : null;
    };

    const handleInputChange = (e) => {
        setVideoUrl(e.target.value);
    };



    const fetchComments = async () => {
        const videoId = extractVideoId(videoUrl);

        if (!videoId) {
            setError('URL no válida. Introduce un enlace correcto de YouTube.');
            return;
        }
        console.log(videoId);
        const url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet&videoId=${videoId}&key=${apiKey}&maxResults=11`;

        try {
            const response = await fetch(url);
            const data = await response.json();

            console.log(data);

            if (data.items) {
                // Creamos el JSON con solo el texto y el ID del comentario
                const commentsData = data.items.map((item) => ({
                    commentId: item.id,
                    text: item.snippet.topLevelComment.snippet.textDisplay,
                }));


                setError(null);

                // Enviar el JSON a una API (como ejemplo)
                sendJsonToApi(commentsData);
            } else {
                setError('No se encontraron comentarios o el ID del video es incorrecto.');
            }
        } catch (err) {
            setError('Error al obtener los comentarios.');
            console.error(err);
        }
    };

    const sendJsonToApi = async (commentsData) => {
        try {
            const response = await fetch('http://localhost:8080/ai', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(commentsData), // Envía el JSON con los comentarios
            });

            if (response.ok) {
                const result = await response.json(); // Obtén la respuesta del backend
                setEmotionData(result); // Actualiza el estado con la respuesta del backend
                console.log('Respuesta del servidor:', result);
            } else {
                console.error('Error en la respuesta del servidor:', response.statusText);
            }
        } catch (err) {
            console.error('Error en la solicitud a la API:', err);
        }
    };

    return (
        <>
            <Header></Header>

            <main className="w-[80dvw] h-[75dvh] flex flex-col justify-between items-center">
                <section className="w-[80dvw] h-[75dvh] flex flex-row justify-between items-center">
                    <div className="w-full flex flex-col items-center justify-center p-10 gap-4">
                        <label className="text-zinc-700 text-sm text-left w-2/3 " htmlFor=""> Ingresa el link de un video de YouTube:</label>
                        <input onChange={handleInputChange} placeholder="https://www.youtube.com/watch?v=7M2kFOzax0w&ab_channel=BandaiNamcoEntertainmentAmerica" type="text" className="w-1/2 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5" />
                        <button onClick={fetchComments} className="w-48 text-white bg-gradient-to-r from-red-400 via-red-500 to-red-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-red-300 dark:focus:ring-red-800 shadow-lg shadow-red-500/50 dark:shadow-lg dark:shadow-red-800/80 font-medium rounded-lg text-sm px-7 py-3 text-center me-2 mb-2">
                            Enviar
                        </button>

                    </div>
                </section>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <section className="w-[80dvw] flex flex-col justify-between items-center">
                    {emotionData && <ResultsEmotions result={emotionData} />}
                </section>
                <section className="w-[80dvw] flex flex-col justify-between items-center">
                    {emotionData && <EmotionRecommendations />}
                </section>
            </main>

            
        </>
    )
}