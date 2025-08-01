import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="min-h-screen bg-gray-900 text-gray-100 p-8 flex flex-col items-center justify-center">
        {/* Main container for the game */}
        <div className="w-full max-w-4xl bg-gray-800 rounded-lg shadow-lg p-6">
          <h1 className="text-4xl font-bold text-center mb-8 text-blue-400">
            Memory Card Game
          </h1>

          {/* This is where the game's content will go */}
          <div className="text-center text-lg text-gray-400">
            Your game will appear here.
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
