import React, { useState } from "react";
import { pokemon } from "./PokemonList";

const CaughtPokemon = ({ date }) => {
  const [caught, setCaught] = useState([]);

  const catchPokemon = () => {
    setCaught(
      caught.concat(pokemon[Math.floor(Math.random() * pokemon.length)])
    );
  };

  return (
    <div>
      <h3>Caught pokemon</h3>
      <ul>
        {caught.map((pokemon, index) => (
          <li key={index}>{pokemon}</li>
        ))}
      </ul>
      <p>
        Caught {caught.length} Pokemon on {date}
      </p>
      <button onClick={catchPokemon}>Catch Pokemon</button>
    </div>
  );
};

export default CaughtPokemon;
