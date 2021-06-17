import React, {useEffect} from "react";
import {connect} from "react-redux";
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions"

function GetPokemonById({getPokemonByID, pokemonById, props}){
  
  useEffect(()=>{
    getPokemonByID(props)    
}, []);

let {name, image, id, height, weight, hp,attack, defense, speed } = pokemonById
let type1=pokemonById.type[0];
let type2=""
if(pokemonById.type[1]){ type2=pokemonById.type[1]}

    return (<div>
        <img src={image} alt=""/>
        <div className="card" >
        <ul>
          <p>{name}</p>
          <p>N° {id}</p>
          <p>Altura {height}</p>
          <p>Peso {weight}</p>
          <p>Vida {hp}</p>
          <p>Ataque {attack}</p>
          <p>Defensa {defense}</p>
          <p>Velocidad {speed}</p>
          <p>Tipos {type1} {type2} </p>
        </ul>
        
        </div>
        
    </div>);
}

const mapStateToProps = (state)=>({
  pokemonById: state.pokemonById
})

function mapDispatchToProps(dispatch){
  return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(GetPokemonById);