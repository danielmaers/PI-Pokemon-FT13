import axios from "axios";
import {
  GET_POKEMONS,
  GET_POKEMON_BY_NAME,
  GET_POKEMON_BY_ID,
  CREATE_POKEMON,
  GET_TYPES,
  SORT_POKEMONS,
  FILTER_POKEMONS,
} from "./actionNames";
import { url } from "../App";

export function clearPokemonByName() {
  return { type: GET_POKEMON_BY_NAME, payload: undefined };
}

export function clearPokemons() {
  return { type: GET_POKEMONS, payload: [] };
}

export function getTypes() {
  return function (dispatch) {
    return axios
      .get(`${url}types`)
      .then((response) => dispatch({ type: GET_TYPES, payload: response.data }))
      .catch((error) => console.log(error));
  };
}

export function getPokemons() {
  return function (dispatch) {
    return axios
      .get(`${url}pokemons`)
      .then((response) =>
        dispatch({ type: GET_POKEMONS, payload: response.data })
      )
      .catch((error) => console.log(error));
  };
}

export function getPokemonByName(name) {
  return (dispatch) => {
    return axios
      .get(`${url}pokemons?name=${name}`)
      .then((response) => {
        console.log(response);
        dispatch({ type: GET_POKEMON_BY_NAME, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export function getPokemonByID(id) {
  return (dispatch) => {
    return axios
      .get(`${url}pokemons/${id}`)
      .then((response) => {
        dispatch({ type: GET_POKEMON_BY_ID, payload: response.data });
      })
      .catch((error) => console.log(error));
  };
}

export const createPokemon = (pokemon) => {
  return (dispatch) => {
    return axios
      .post(`${url}pokemons`, pokemon)
      .then((response) =>
        dispatch({ type: CREATE_POKEMON, payload: response.data })
      );
  };
};

export function sortPokemons(pokemons, order, typeOrder) {
  if (order === "alphabetic" && typeOrder === "ascending") {
    pokemons.sort(function (a, b) {
      if (a.name > b.name) {
        return 1;
      }
      if (a.name < b.name) {
        return -1;
      }

      return 0;
    });
  } else if (order === "alphabetic" && typeOrder === "descending") {
    pokemons.sort(function (a, b) {
      if (a.name < b.name) {
        return 1;
      }
      if (a.name > b.name) {
        return -1;
      }

      return 0;
    });
  } else if (order === "attack" && typeOrder === "ascending") {
    pokemons.sort(function (a, b) {
      return a.attack - b.attack;
    });
  } else if (order === "attack" && typeOrder === "descending") {
    pokemons.sort(function (b, a) {
      return a.attack - b.attack;
    });
  }

  return {
    type: SORT_POKEMONS,
    payload: pokemons,
  };
}

export function pokemonFilter(pokemons, filter) {
  var filtered = [];
  if (filter === "database") {
    filtered = pokemons.filter((e) => typeof e.id !== "number");
  } else if (filter === "api") {
    filtered = pokemons.filter((e) => typeof e.id === "number");
  } else {
    filtered = pokemons.filter((e) => e.type1 === filter || e.type2 === filter);
  }
  return {
    type: FILTER_POKEMONS,
    payload: filtered,
  };
}
