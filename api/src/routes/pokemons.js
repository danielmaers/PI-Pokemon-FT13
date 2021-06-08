const { Router } = require('express');
const {addPokemon} = require("../controllers/pokemons");
const axios = require("axios");


const router = Router();

router.get("/", (req,res)=>{
    res.send("ruta pokemons");
})

router.post("/", addPokemon)


module.exports = router;