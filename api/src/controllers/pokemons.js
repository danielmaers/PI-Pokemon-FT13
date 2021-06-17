const { Pokemon } = require('../db');
const {v4: uuidv4} = require("uuid");
const {BASE_URL, PKMN_URL} = require("../../constants");
const axios = require("axios");



async function getPokemons(req, res, next) {
  if(req.query.name){
      return next()
  }
  
    try {
    let pkmnapi = await axios.get(`${BASE_URL}${PKMN_URL}`);
    pkmnapi = pkmnapi.data.results
      .filter((element) => element.url)
      .map((element) => element.url);
    for (let index = 0; index < pkmnapi.length; index++) {
      pkmnapi[index] = await axios.get(pkmnapi[index]);
    }
    pkmnapi = pkmnapi.map((element) => element.data);

    let i = 0;
    const showpkmn = [];
    while (i < 12) {
      let pkmn = {
        id:  pkmnapi[i].id,
        image: pkmnapi[i].sprites.front_default,
        name: pkmnapi[i].name,
        type: [pkmnapi[i].types[0].type.name, pkmnapi[i].types[1]?.type.name],
      };
      showpkmn.push(pkmn);
      i++;
    }
    
    res.send(showpkmn);
    next()
  } catch (error) {
    next(error);
  }
}

async function getPokemonById(req, res, next){
    const id=req.params.idPokemon
    
    try {
        
        let pkmnapi= await axios.get(`${BASE_URL}${PKMN_URL}/${id}/`);
               
        pkmnapi= pkmnapi.data;
         let showpkmn = {
         image: pkmnapi.sprites.front_default,
             name: pkmnapi.name,
             type: [pkmnapi.types[0].type.name, pkmnapi.types[1]?.type.name],
             id: pkmnapi.id,
             height: pkmnapi.height,
             weight: pkmnapi.weight,
            hp: pkmnapi.stats[0].base_stat,
            attack: pkmnapi.stats[1].base_stat,
            defense: pkmnapi.stats[2].base_stat,
              speed: pkmnapi.stats[5].base_stat
                }
            
        
        
        res.send(showpkmn);

    } catch (error) {
        
        Pokemon.findOne({ where: { id: id } })
        .then((pokemon)=>{
            res.send(pokemon)
        })
        .catch((error)=>{
            res.status(500).send('Not found!');
        })
        

    }
}

async function getPokemonByName(req, res, next){
    const name = req.query.name;
    try {
        
        let pkmnapi= await axios.get(`${BASE_URL}${PKMN_URL}/${name}/`);
               
        pkmnapi= pkmnapi.data;
         let showpkmn = {
         image: pkmnapi.sprites.front_default,
             name: pkmnapi.name,
             type: [pkmnapi.types[0].type.name, pkmnapi.types[1]?.type.name],
             id: pkmnapi.id,
             height: pkmnapi.height,
             weight: pkmnapi.weight,
             hp:  pkmnapi.stats[0].base_stat,
              attack: pkmnapi.stats[1].base_stat,
             defense: pkmnapi.stats[2].base_stat,
             speed: pkmnapi.stats[5].base_stat
                }
            
        
        
        res.send(showpkmn);

    } catch (error) {
        Pokemon.findOne({ where: { name: name } })
        .then((pokemon)=>{
            if(pokemon){
            res.send(pokemon)
        }else{
            res.status(500).send('Not found!');
        }
        })
        .catch((error)=>{
            next(error)
            
        })
    }
}

function addPokemon(req, res, next){
const {name, hp, attack, defense, speed, height, weight} = req.body
let newPokemon={
    id: uuidv4(),
    name: name,
    hp: hp,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight:   weight
}

return Pokemon.create(newPokemon)
.then((pokemon)=>res.send(pokemon))
.catch((error)=> next(error));

}
module.exports = {
    getPokemons,
    getPokemonById,
    getPokemonByName,
    addPokemon
}



/* GET /pokemons: api   TERMINADO
    Obtener un listado de los primeros 12 pokemons desde pokeapi
    Debe devolver solo los datos necesarios para la ruta principal
GET /pokemons/{idPokemon}:  (id) (FALTA REVISAR EN LA DB)
    Obtener el detalle de un pokemon en particular
    Debe traer solo los datos pedidos en la ruta de detalle de pokemon:
    Ruta de detalle de Pokemon: 
    Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
    Número de Pokemon (id)
    Estadísticas (vida, fuerza, defensa, velocidad)
    Altura y peso

    Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
GET /pokemons?name="...": (query)
    Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
    Si no existe ningún pokemon mostrar un mensaje adecuado
POST /pokemons: (body)
    Recibe los datos recolectados desde el formulario controlado de la ruta de creación de pokemons por body
    Crea un pokemon en la base de datos */

