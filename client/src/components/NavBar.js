import React from "react";
import {NavLink} from "react-router-dom";


export default function NavBar(){
    return (
        <div className="navBar">
            
            <NavLink to="/home/search" className="button">Search</NavLink>
            <NavLink to="/home" className="button">Home</NavLink>
            <NavLink to="/home/pokemons" className="button">Pokemons</NavLink>
            <NavLink to="/home/create" className="button">Crear Pokemon</NavLink>
        </div>
    )
}