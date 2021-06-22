import React, {useEffect} from "react";
import "./pokemons.css";
import {connect, useDispatch} from "react-redux";
import PkmnCard from "./pkmnCard"
import { bindActionCreators } from "redux";
import * as actionCreators from "../actions/actions"
// "descending"
// "ascending"


function Pokemons({getPokemons, showPokemons,clearPokemons}){

    const dispatch = useDispatch()
    
    useEffect(()=>{
        getPokemons()
        return ()=>{
            dispatch(clearPokemons())
        }   
    }, []);

    
    
    return (
        <div className="pokegrid">
            
        <ul>
            {console.log(showPokemons)}
        {showPokemons.map((pokemon, i)=>(
        <div key= {i} className="card"> 
        <PkmnCard name={pokemon.name} type1 = {pokemon.type1} type2 = {pokemon.type2} img= {pokemon.image} id={pokemon.id}/>
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