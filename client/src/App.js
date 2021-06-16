import './App.css';
import React  from "react";
//import { useDispatch, useSelector } from 'react-redux';
//import { getPokemons } from './actions/actions';
//import PkmnCard from './components/pkmnCard';
import SearchPokemon from './components/searchPokemon.js';
import Pokemons from './components/pokemons.js';
import NavBar from './components/NavBar.js';
import GetPokemonById from './components/pokemonById.js';
import { Route } from 'react-router';


function App() {
  // const dispatch=  useDispatch()
  // useEffect(()=>{
  //   dispatch(getPokemons())
  // }, [dispatch])
  // const pokemons = useSelector(state=>state.pokemon)
  // console.log(pokemons)
  return (
    <div className="App">
      
      <Route path="/" component={NavBar}/>      
       <Route path="/pokemons" component= {SearchPokemon} /> 
      <Route exact path="/pokemons" component = {Pokemons} />
      <Route exact path="/pokemons/:id" render={({match})=><GetPokemonById props={match.params.id}/>} />
      

    </div>
  );
}

export default App;
