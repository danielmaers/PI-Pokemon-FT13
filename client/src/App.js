import "./App.css";
import React from "react";
import SearchPokemon from "./components/searchPokemon.js";
import Pokemons from "./components/pokemons.js";
import NavBar from "./components/NavBar.js";
import GetPokemonById from "./components/pokemonById.js";
import LandingPage from "./components/LandingPage";
import CreatePokemon from "./components/CreatePokemon";
import { Route } from "react-router";

export const url = process.env.REACT_APP_API || "http://localhost:3001";

function App() {
  return (
    <div className="App">
      <Route exact path="/" component={LandingPage} />
      <Route path="/home" component={NavBar} />
      <Route path="/home/search" component={SearchPokemon} />
      <Route exact path="/home/pokemons" component={Pokemons} />
      <Route
        path="/home/pokemons/:id"
        render={({ match }) => <GetPokemonById props={match.params.id} />}
      />
      <Route path="/home/create" component={CreatePokemon} />
    </div>
  );
}

export default App;
