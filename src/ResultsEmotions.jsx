import PropTypes from 'prop-types';

EmotionDisplay.propTypes = {
    result: PropTypes.arrayOf(
        PropTypes.shape({
            emotion: PropTypes.string.isRequired,
            count: PropTypes.number.isRequired,
        })
    ).isRequired, // Asegúrate de marcarlo como requerido
};

export default function EmotionDisplay({ result }) {
    // Ordenar las emociones de mayor a menor según el conteo
    const topEmotions = result
        .slice() // Hacer una copia para no mutar el original
        .sort((a, b) => b.count - a.count) // Ordenar de mayor a menor
        .slice(0, 3); // Tomar solo los tres primeros

    return (
        <div className=" w-3/5 bg-gray-100 flex items-center justify-center p-4">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                {topEmotions.map((emotionData, index) => (
                    <div
                        key={index}
                        className="bg-white rounded-lg shadow-lg p-6 text-center transform transition duration-500 hover:scale-105 hover:shadow-xl"
                    >
                        <h3 className="text-2xl font-bold text-red-800 capitalize">
                            {emotionData.emotion}
                        </h3>
                        <p className="text-gray-500 mt-2 text-lg">
                            Posicion: {index + 1}
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
}