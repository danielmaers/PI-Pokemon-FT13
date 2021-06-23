import React from "react";
import PkmnCard from "./pkmnCard";

const Mapping = ({pokemons, loading})=>{
    if(loading){
        return <h2>Loading...</h2>
    }
    return <ul>
        {pokemons.map((pokemon, i)=>(
        <li key= {i} className="card"> 
        <PkmnCard name={pokemon.name} type1 = {pokemon.type1} type2 = {pokemon.type2} img= {pokemon.image} id={pokemon.id}/>
        </li>
        ))} 
    </ul>
}

export default Mapping;