import axios from "axios";
import { GET_POKEMONS, GET_POKEMON_BY_NAME, GET_POKEMON_BY_ID, CREATE_POKEMON, GET_TYPES, SORT_POKEMONS } from "./actionNames";


export function clearPokemonByName(){
    return ({type: GET_POKEMON_BY_NAME, payload:undefined})

    
}


export function clearPokemons(){
    return ({type: GET_POKEMONS , payload:[]})

    
}

export function getTypes(){
    return function (dispatch){
       return axios.get("http://localhost:3001/types")       
       .then(response=>dispatch({type: GET_TYPES, payload:response.data})
        )
        .catch(error=>console.log(error))
    }
}

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
       return axios.get(`http://localhost:3001/pokemons?name=${name}`)  
        .then((response)=>{
            console.log(response)
            dispatch({type: GET_POKEMON_BY_NAME, payload: response.data})
        })
        .catch(error=>console.log(error))
    }       
}

export function getPokemonByID(id){
    return (dispatch)=>{
      return  axios.get(`http://localhost:3001/pokemons/${id}`)
        .then((response)=>{
            
            dispatch({type: GET_POKEMON_BY_ID, payload: response.data})
        })
        .catch(error=>console.log(error))
    }       
}

export const createPokemon=(pokemon)=>{
    return (dispatch)=>{
        return axios.post(`http://localhost:3001/pokemons`,pokemon)
      .then((response)=>
      dispatch({type: CREATE_POKEMON, payload:response.data})
      )
      ;
    }
  }



export function sortPokemons(pokemons, order, typeOrder){
        if(order==="alphabetic" && typeOrder==="ascending"){
            pokemons.sort(function (a, b) {
                        if (a.name > b.name) {
                          return 1;
                        }
                        if (a.name < b.name) {
                          return -1;
                        }
                       
                        return 0;
                      });
        }else if(order==="alphabetic" && typeOrder==="descending"){
            pokemons.sort(function (a, b) {
                if (a.name < b.name) {
                  return 1;
                }
                if (a.name > b.name) {
                  return -1;
                }
               
                return 0;
              });

        }else if(order==="attack" && typeOrder==="ascending"){
            pokemons.sort(function (a, b) {
                if (a.attack > b.attack) {
                  return 1;
                }
                if (a.attack < b.attack) {
                  return -1;
                }
               
                return 0;
              });
        }else if(order==="attack" && typeOrder==="descending"){
            pokemons.sort(function (a, b) {
                if (a.attack < b.attack) {
                  return 1;
                }
                if (a.attack > b.attack) {
                  return -1;
                }
               
                return 0;
              });
        }    
        return {
            type: SORT_POKEMONS,
            payload: pokemons }
        }
        
         
       
       
        
    

    