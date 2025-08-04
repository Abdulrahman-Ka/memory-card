const Card = ({ pokemon, onClick }) => {
  return (
    <div
      className="bg-gray-700 rounded-xl shadow-lg p-4 cursor-pointer hover:bg-gray-600 transition-all duration-200 transform hover:scale-105"
      onClick={() => onClick(pokemon.id)}
    >
      <img
        src={pokemon.image}
        alt={pokemon.name}
        className="w-full h-32 object-contain mb-2"
      />
      <p className="text-center text-lg font-semibold capitalize text-blue-300">
        {pokemon.name}
      </p>
    </div>
  );
};

export default Card;
