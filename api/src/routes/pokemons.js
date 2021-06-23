const { Router } = require('express');
const {getPokemons, getPokemonById, getPokemonByName, addPokemon} = require("../controllers/pokemons");



const router = Router();

router.get("/", getPokemons)

router.get("/:idPokemon", getPokemonById)

router.get("", getPokemonByName)

router.post("/", addPokemon)


module.exports = router;