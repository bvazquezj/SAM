import { useState } from "react";

const recommendations = {
  "alegría": [
    "Publica contenido que resalte momentos positivos.",
    "Celebra los logros de tu audiencia.",
    "Usa colores brillantes y música alegre.",
    "Comparte historias inspiradoras.",
    "Haz preguntas divertidas a tu audiencia.",
    "Crea retos divertidos para participar."
  ],
  "tristeza": [
    "Comparte historias personales o testimonios.",
    "Genera empatía con experiencias emocionales.",
    "Usa tonos más oscuros o suaves y música lenta.",
    "Aborda temas que generen empatía.",
    "Publica reflexiones profundas."
  ],
  "sarcasmo": [
    "Usa humor irónico en temas actuales.",
    "Haz referencia a exageraciones para generar comicidad.",
    "Publica memes divertidos o GIFs graciosos.",
    "Crea parodias de situaciones actuales."
  ],
  "enojo": [
    "Toca temas controversiales o problemáticos.",
    "Motiva a tu comunidad a expresar su opinión.",
    "Inspira a tu audiencia a tomar acción ante injusticias.",
    "Aborda problemas sociales controvertidos.",
    "Expresa tu postura de manera clara."
  ],
  "sorpresa": [
    "Revela datos o hechos inesperados.",
    "Genera expectativa antes de un gran anuncio.",
    "Usa teasers o adelantos para mantener el interés.",
    "Invita a participar en juegos o concursos sorpresa.",
    "Comparte datos curiosos o hechos sorprendentes."
  ]
};

const EmotionRecommendations = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
  };

  return (
    <div className=" w-3/5 bg-gray-100 flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Emociones</h1>
      <div className="grid grid-cols-5 gap-4">
        {Object.keys(recommendations).map((emotion) => (
          <button
            key={emotion}
            onClick={() => handleEmotionClick(emotion)}
            className="text-red-700 hover:text-white border border-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-red-500 dark:text-red-500 dark:hover:text-white dark:hover:bg-red-600 dark:focus:ring-red-900">
            {emotion.charAt(0).toUpperCase() + emotion.slice(1)}
          </button>
        ))}
      </div>

      {selectedEmotion && (
        <div className="mt-4 p-4 border border-gray-300 rounded">
          <h2 className="text-xl font-semibold">
            Recomendaciones para {selectedEmotion.charAt(0).toUpperCase() + selectedEmotion.slice(1)}:
          </h2>
          <ul className="list-disc pl-5">
            {recommendations[selectedEmotion].map((rec, index) => (
              <li key={index}>{rec}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default EmotionRecommendations;
