import React from "react";
// import CaughtPokemon from "./CaughtPokemon";

const BestPokemon = ({ abilities }) => {
  return (
    <div>
      <p>My favourite Pokemon is Pikachu</p>
      <h3>Abilities</h3>
      <ul>
        {abilities.map((ability, index) => (
          <li key={index}>{ability}</li>
        ))}
      </ul>
    </div>
  );
};

export default BestPokemon;
