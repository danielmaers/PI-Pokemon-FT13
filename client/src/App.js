import './App.css';
import React, {useEffect} from "react";
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './actions';
import PkmnCard from './components/pkmnCard';


function App() {
  // const dispatch=  useDispatch()
  // useEffect(()=>{
  //   dispatch(getPokemons())
  // }, [dispatch])
  // const pokemons = useSelector(state=>state.pokemon)
  // console.log(pokemons)
  return (
    <div className="App">
      <div>
        <PkmnCard 
        hp={1}
        attack= {1}
        defense= {1}
        speed= {1}
        height= {1}
        weight= {1} 
        />
      </div>

    </div>
  );
}

export default App;
