import axios from "axios";
import { GET_POKEMONS } from "./actionNames";

export function getPokemons(){
    return (dispatch)=>{
        axios.get("http://localhost:3001/pokemons")
        .then((response)=>{
            dispatch({type: GET_POKEMONS, payload: response.data})
        })
    }
}