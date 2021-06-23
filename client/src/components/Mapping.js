import React from "react";
import "./pokemons.css";
import PkmnCard from "./pkmnCard";

const Mapping = ({ pokemons }) => {
  return (
    <ul className="pokegrid">
      {pokemons.map((pokemon, i) => (
        <li key={i} className="">
          <PkmnCard
            name={pokemon.name}
            type1={pokemon.type1}
            type2={pokemon.type2}
            img={pokemon.image}
            id={pokemon.id}
          />
        </li>
      ))}
    </ul>
  );
};

export default Mapping;
