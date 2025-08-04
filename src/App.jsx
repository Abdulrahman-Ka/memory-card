import "./App.css";
import { useEffect, useState } from "react";
import CardGrid from "./components/CardGrid";

function App() {
  const [score, setScore] = useState(0);
  const [bestScore, setBestScore] = useState(0);
  const [cards, setCards] = useState([]);
  const [clickedCards, setClickedCards] = useState(new Set());
  const [loading, setLoading] = useState(true);

  const shuffleCards = (cardArray) => {
    const newCards = [...cardArray];
    for (let i = newCards.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newCards[i], newCards[j]] = [newCards[j], newCards[i]];
    }
    setCards(newCards);
  };

  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon?limit=12"
        );
        const data = await response.json();
        const pokemonList = data.results.map((pokemon, index) => ({
          id: index,
          name: pokemon.name,
          image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`,
        }));

        shuffleCards(pokemonList);
        setLoading(false);
      } catch (error) {
        console.error("Failed to fetch Pokemon data:", error);
        setLoading(false);
      }
    };
    fetchPokemon();
  }, []);

  const handleCardClick = (id) => {
    if (clickedCards.has(id)) {
      if (score > bestScore) {
        setBestScore(score);
      }
      setScore(0);
      setClickedCards(new Set());
      shuffleCards(cards);
    } else {
      setScore(score + 1);
      setClickedCards((prevClicked) => new Set(prevClicked).add(id));
      shuffleCards(cards);
    }
  };

  return (
    <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex flex-col items-center justify-center">
      <div className="w-full max-w-5xl bg-gray-800 rounded-xl shadow-2xl p-8">
        <h1 className="text-5xl font-extrabold text-center mb-6 text-blue-400 drop-shadow-md">
          Pokémon "Click a Unique Card" Game
        </h1>

        <div className="flex justify-between items-center bg-gray-700 p-5 rounded-xl shadow-inner mb-8">
          <div className="text-3xl font-semibold">
            Current Score: <span className="text-green-400">{score}</span>
          </div>
          <div className="text-3xl font-semibold">
            Best Score: <span className="text-yellow-400">{bestScore}</span>
          </div>
        </div>

        {loading ? (
          <div className="text-center text-3xl text-gray-400">
            Loading Pokémon...
          </div>
        ) : (
          <CardGrid cards={cards} handleCardClick={handleCardClick} />
        )}
      </div>
    </div>
  );
}

export default App;
