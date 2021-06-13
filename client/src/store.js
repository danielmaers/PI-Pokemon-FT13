import {createStore, applyMiddleware} from "redux"
import thunk from "redux-thunk"
import {GET_POKEMONS} from "./actionNames"

const initialState = {
    pokemon: undefined,
}

function reducer(state= initialState, action){

switch(action.type){
    case GET_POKEMONS:{
        return {
            ...state,
            pokemon: action.payload,
        };
    }
    default: {
        return state
    }
}

};

const store= createStore(reducer, applyMiddleware(thunk));
export default store;