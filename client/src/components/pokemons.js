import React, {useEffect} from "react";
import {connect} from "react-redux";
import PkmnCard from "./pkmnCard"
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions"


function Pokemons({getPokemons, showPokemons}){
    useEffect(()=>{
        getPokemons()
        
    }, []);
    useEffect(()=>console.log(showPokemons),[showPokemons])
    return (
        <div>
            
        <ul>
        {showPokemons.map((pokemon, i)=>(
        <div key= {i}>
        <PkmnCard name={pokemon.name} type = {pokemon.type} img= {pokemon.image} id={pokemon.id}/>
        </div>
        ))}       
        </ul>
        
    </div>
    );
}

const mapStateToProps = (state)=>({
    showPokemons: state.showPokemons
})

function mapDispatchToProps(dispatch){
    return bindActionCreators(actionCreators, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Pokemons);