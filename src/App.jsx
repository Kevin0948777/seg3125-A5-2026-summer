import { useEffect, useState } from "react";
import "./App.css";

import arceus from "./assets/pokemon/arceus.png";
import bidoof from "./assets/pokemon/bidoof.png";
import chimchar from "./assets/pokemon/chimchar.png";
import dialga from "./assets/pokemon/dialga.png";
import garchomp from "./assets/pokemon/garchomp.png";
import giratina from "./assets/pokemon/giratina.png";
import magnezone from "./assets/pokemon/magnezone.png";
import palkia from "./assets/pokemon/palkia.png";
import pikachu from "./assets/pokemon/pikaichu.webp";
import piplup from "./assets/pokemon/piplup.png";
import staraptor from "./assets/pokemon/Staraptor.png";
import turtwig from "./assets/pokemon/Turtwig.png";

const themes = {
  Pokemon: [
    arceus,
    bidoof,
    chimchar,
    dialga,
    garchomp,
    giratina,
    magnezone,
    palkia,
    pikachu,
    piplup,
    staraptor,
    turtwig,
  ],
  Animals: ["🐶", "🐱", "🐰", "🦊", "🐼", "🐸", "🐵", "🐧", "🦁", "🐯", "🐨", "🐮"],
  Food: ["🍕", "🍔", "🍟", "🌮", "🍣", "🍩", "🍎", "🍇", "🍪", "🍰", "🥐", "🍜"],
};

const levels = {
  Beginner: 6,
  Intermediate: 8,
  Advanced: 12,
};

function shuffleCards(array) {
  return [...array].sort(() => Math.random() - 0.5);
}

function App() {
  const [level, setLevel] = useState("Beginner");
  const [theme, setTheme] = useState("Pokemon");
  const [cards, setCards] = useState([]);
  const [flipped, setFlipped] = useState([]);
  const [matched, setMatched] = useState([]);
  const [moves, setMoves] = useState(0);
  const [gameStarted, setGameStarted] = useState(false);

  function startGame() {
    const pairCount = levels[level];
    const selectedItems = themes[theme].slice(0, pairCount);

    const cardPairs = [...selectedItems, ...selectedItems].map((item, index) => ({
      id: index,
      item,
    }));

    setCards(shuffleCards(cardPairs));
    setFlipped([]);
    setMatched([]);
    setMoves(0);
    setGameStarted(true);
  }

  function handleCardClick(card) {
    if (
      flipped.length === 2 ||
      flipped.some((item) => item.id === card.id) ||
      matched.includes(card.item)
    ) {
      return;
    }

    setFlipped([...flipped, card]);
  }

  useEffect(() => {
    if (flipped.length === 2) {
      setMoves((previous) => previous + 1);

      if (flipped[0].item === flipped[1].item) {
        setMatched((previous) => [...previous, flipped[0].item]);
        setTimeout(() => setFlipped([]), 700);
      } else {
        setTimeout(() => setFlipped([]), 900);
      }
    }
  }, [flipped]);

  const won = gameStarted && matched.length === levels[level];

  return (
    <main className="app">
      <header className="hero">
        <p className="tag">SEG3125 MEMORY GAME</p>
        <h1>Memory Match Challenge</h1>
        <p>
          Flip cards, remember their positions, and match all pairs. Choose a
          level and theme before starting the game.
        </p>
      </header>

      <section className="settings">
        <label>
          Level
          <select value={level} onChange={(e) => setLevel(e.target.value)}>
            <option>Beginner</option>
            <option>Intermediate</option>
            <option>Advanced</option>
          </select>
        </label>

        <label>
          Theme
          <select value={theme} onChange={(e) => setTheme(e.target.value)}>
            <option>Pokemon</option>
            <option>Animals</option>
            <option>Food</option>
          </select>
        </label>

        <button onClick={startGame}>Start Game</button>
      </section>

      <section className="stats">
        <div>
          <strong>{moves}</strong>
          <span>Moves</span>
        </div>

        <div>
          <strong>{matched.length}</strong>
          <span>Matches</span>
        </div>

        <div>
          <strong>{levels[level]}</strong>
          <span>Total Pairs</span>
        </div>
      </section>

      {gameStarted && (
        <section className={`game-board ${level === "Advanced" ? "advanced-board" : ""}`}>
          {cards.map((card) => {
            const isFlipped =
              flipped.some((item) => item.id === card.id) ||
              matched.includes(card.item);

            const isImage = typeof card.item === "string" && card.item.includes("/assets/");

            return (
              <button
                key={card.id}
                className={`card ${isFlipped ? "flipped" : ""}`}
                onClick={() => handleCardClick(card)}
              >
                {isFlipped ? (
                  isImage ? (
                    <img src={card.item} alt="Pokemon card" className="pokemon-card" />
                  ) : (
                    card.item
                  )
                ) : (
                  "?"
                )}
              </button>
            );
          })}
        </section>
      )}

      {!gameStarted && (
        <section className="instruction-box">
          <h2>How to Play</h2>
          <p>
            Select a level and theme, then click Start Game. Flip two cards at a
            time and try to remember where each icon is located.
          </p>
        </section>
      )}

      {won && (
        <section className="win-box">
          <h2>You Win!</h2>
          <p>
            You matched all pairs in <strong>{moves}</strong> moves.
          </p>
          <button onClick={startGame}>Play Again</button>
        </section>
      )}

      <footer>
        <p>Designed by Kai Wen Yuan</p>
        <p>SEG3125 Assignment 3 Memory Game Prototype</p>
      </footer>
    </main>
  );
}

export default App;