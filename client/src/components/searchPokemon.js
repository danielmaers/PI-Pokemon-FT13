import React from "react";
import {connect} from "react-redux";
//import { Link } from 'react-router-dom';
import {getPokemonByName} from "../actions/actions";
//import PkmnCard from "./pkmnCard";
//import {bindActionCreators} from "redux";
//import * as actionCreators from "../actions/actions"



function SearchPokemon({getPokemonByName, pokemon}){
const [state, setState]= React.useState('')

function handleChange(e){

setState(e.target.value)
}

function handleSubmit(e){
e.preventDeafault();
console.log(state)
getPokemonByName(state);
setState('');
}

return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={state} onChange={handleChange}/>
            <button type="submit">Search Pokemon</button>            
        </form>
        
    </div>
);

};

function mapDispatchToProps(dispatch){
    return{
        getPokemonByName: pokemon=> dispatch(getPokemonByName(pokemon))
    }
}

const mapStateToProps = (state)=>({
    pokemon: state.getPokemonByName
})

// function mapDispatchToProps(dispatch){
//     return bindActionCreators(actionCreators, dispatch);
// }

export default connect(mapStateToProps, mapDispatchToProps)(SearchPokemon);

