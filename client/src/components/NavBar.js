import React from "react";
import {Link} from "react-router-dom";
//import {SearchPokemon} from "./searchPokemon";

export default function NavBar(){
    return (
        <div class-name="nav-bar">
            <h2>Barra de navegacion</h2>
           
            <Link to="/">Home</Link>
            <Link to="/pokemons">Pokemons</Link>
            <Link to="/create" >Crear Pokemon</Link>

        </div>
    )
}