import axios from "axios";
import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID } from "./actionNames";

export function getPokemons(){
    return function (dispatch){
       return axios.get("http://localhost:3001/pokemons")
       .then(response=>dispatch({type: GET_POKEMONS, payload:response.data})
        )
        .catch(error=>console.log(error))
    }
}

export function getPokemonByName(name){
    return (dispatch)=>{
       return axios.get(`http://localhost:3001/pokemons/${name}`)  
        .then((response)=>{
            console.log(response)
            dispatch({type: GET_POKEMON_BY_NAME, payload: response.data})
        })
        .catch(error=>console.log(error))
    }       
}

export function getPokemonByID(id){
    return (dispatch)=>{
        axios.get(`http://localhost:3001/pokemons/${id}`)
        .then((response)=>{
            console.log(response)
            dispatch({type: GET_POKEMON_BY_ID, payload: response.data})
        })
        .catch(error=>console.log(error))
    }       
}