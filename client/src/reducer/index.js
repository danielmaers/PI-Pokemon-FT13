import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  CREATE_POKEMON,
  GET_TYPES,
  SORT_POKEMONS,
  FILTER_POKEMONS,
} from "../actions/actionNames";

const initialState = {
  showPokemons: [],
  pokemonById: null,
  pokemonByName: null,
  createPokemon: {},
  types: [],
  filtered: [],
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_POKEMONS:
      return {
        ...state,
        showPokemons: action.payload,
      };
    case GET_POKEMON_BY_NAME:
      return {
        ...state,
        pokemonByName: action.payload,
      };
    case GET_POKEMON_BY_ID:
      return {
        ...state,
        pokemonById: action.payload,
      };
    case CREATE_POKEMON:
      return {
        ...state,
        createPokemon: action.payload,
      };
    case GET_TYPES:
      return {
        ...state,
        types: action.payload,
      };
    case SORT_POKEMONS:
      return {
        ...state,
        showPokemons: action.payload,
      };
    case FILTER_POKEMONS:
      return {
        ...state,
        showPokemons: action.payload,
      };
    default: {
      return state;
    }
  }
}

export default reducer;
