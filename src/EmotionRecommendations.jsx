import { useState } from "react";

const recommendations = {
  alegría: [
    'Comparte historias inspiradoras.',
    'Haz preguntas divertidas a tu audiencia.',
    'Crea retos divertidos para participar.',
  ],
  tristeza: [
    'Comparte experiencias personales.',
    'Aborda temas que generen empatía.',
    'Publica reflexiones profundas.',
  ],
  sarcasmo: [
    'Utiliza humor irónico en tus publicaciones.',
    'Emplea memes divertidos.',
    'Crea parodias de situaciones actuales.',
  ],
  enojo: [
    'Aborda problemas sociales controvertidos.',
    'Invita a tu comunidad a compartir su opinión.',
    'Expresa tu postura de manera clara.',
  ],
  sorpresa: [
    'Comparte datos curiosos o hechos sorprendentes.',
    'Crea expectativa antes de un anuncio.',
    'Invita a participar en juegos de sorpresa.',
  ],
};

const EmotionRecommendations = () => {
  const [selectedEmotion, setSelectedEmotion] = useState(null);

  const handleEmotionClick = (emotion) => {
    setSelectedEmotion(emotion);
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Emociones</h1>
      <div className="grid grid-cols-2 gap-4">
        {Object.keys(recommendations).map((emotion) => (
          <button
            key={emotion}
            onClick={() => handleEmotionClick(emotion)}
            className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 transition"
          >
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
