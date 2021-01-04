import React from "react";
import Logo from "./Logo";
import BestPokemon from "./BestPokemon";
import CaughtPokemon from "./CaughtPokemon";
import PokemonMovesSelector from "./PokemonMovesSelector";
// import { pokemon } from "./PokemonList";
import PokemonCity from "./PokemonCity";

const App = () => {
  const abilities = ["Quick Attack", "Thunder Shock", "Tail Whip"];

  const handleClick = () => {
    console.log("Pokemon was clicked on");
  };

  return (
    <div>
      <Logo appName="Pokedex" handleClick={handleClick} />
      <BestPokemon abilities={abilities} />
      <CaughtPokemon date={new Date().toLocaleDateString()} />
      <PokemonMovesSelector />
      <PokemonCity />
    </div>
  );
};

export default App;
