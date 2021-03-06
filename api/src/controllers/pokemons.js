const { Pokemon, Type } = require("../db");

const { v4: uuidv4 } = require("uuid");
const { BASE_URL, PKMN_URL } = require("../../constants");
const axios = require("axios");

async function getPokemons(req, res, next) {
  if (req.query.name) {
    return next();
  }

  try {
    let dbPokemon = await Pokemon.findAll({ include: Type });
    console.log(dbPokemon);
    dbPokemon = dbPokemon.map((element) => {
      return {
        id: element.dataValues.id,
        image: element.dataValues.image,
        name: element.dataValues.name,
        attack: element.dataValues.attack,
        type1: element.dataValues.types[0]?.name,
        type2: element.dataValues.types[1]?.name,
      };
    });

    let pokemonsPendingPromises = [];
    for (let i = 1; i <= 40; i++) {
      pokemonsPendingPromises.push(axios.get(`${BASE_URL}${PKMN_URL}/${i}`));
    }

    Promise.all(pokemonsPendingPromises)
      .then((pokemon) => {
        let pokemonsArray = pokemon.map((element) => {
          return {
            id: element.data.id,
            image:
              element.data.sprites.versions["generation-v"]["black-white"]
                .animated.front_default,
            name: element.data.name,
            attack: element.data.stats[1].base_stat,
            type1: element.data.types[0].type.name,
            type2: element.data.types[1]?.type.name,
          };
        });

        pokemonsArray = pokemonsArray.concat(dbPokemon);

        res.send(pokemonsArray);
      })
      .catch((error) => {
        console.log(error);
      });
    //  .then((response) => console.log(response));
    // let pkmnapi = await axios.get(`${BASE_URL}${PKMN_URL}?offset=00&limit=41`);
    // pkmnapi = pkmnapi.data.results
    //   .filter((element) => element.url)
    //   .map((element) => element.url);
    // for (let index = 0; index < pkmnapi.length; index++) {
    //   pkmnapi[index] = await axios.get(pkmnapi[index]);
    // }
    // console.log(pkmnapi);
    // pkmnapi = pkmnapi.map((element) => {
    // return  {
    //         id:  element.data.id,
    //         image: element.data.sprites.versions["generation-v"]["black-white"].animated.front_default,
    //         name: element.data.name,
    //         attack: element.data.stats[1].base_stat,
    //         type1: element.data.types[0].type.name ,
    //         type2:element.data.types[1]?.type.name
    // }
    // });

    // let dbPokemon= await Pokemon.findAll({include: Type})

    // dbPokemon=dbPokemon.map((element)=>{
    //     return  {
    //                 id:  element.id,
    //                 image: element.image,
    //                 name: element.name,
    //                 attack: element.stats[1].base_stat,
    //                 type1: element.types[0].name ,
    //                 type2:element.types[1]?.name
    //         }
    // } )

    // pkmnapi= pkmnapi.concat(dbPokemon)
    // console.log(pkmnapi)
    // return res.send(pkmnapi);
  } catch (error) {
    next(error);
  }
}

async function getPokemonById(req, res, next) {
  const id = req.params.idPokemon;

  try {
    let pkmnapi = await axios.get(`${BASE_URL}${PKMN_URL}/${id}/`);

    pkmnapi = pkmnapi.data;
    let showpkmn = {
      image: pkmnapi.sprites.other.dream_world.front_default,
      name: pkmnapi.name,
      type1: pkmnapi.types[0].type.name,
      type2: pkmnapi.types[1]?.type.name,
      id: pkmnapi.id,
      height: pkmnapi.height,
      weight: pkmnapi.weight,
      hp: pkmnapi.stats[0].base_stat,
      attack: pkmnapi.stats[1].base_stat,
      defense: pkmnapi.stats[2].base_stat,
      speed: pkmnapi.stats[5].base_stat,
    };

    res.send(showpkmn);
  } catch (error) {
    Pokemon.findByPk(id, { include: Type })
      .then((pokemon) => {
        res.send(pokemon);
      })
      .catch((error) => {
        res.status(500).send("Not found!");
      });
  }
}

async function getPokemonByName(req, res, next) {
  const name = req.query.name;

  try {
    let pkmnapi = await axios.get(`${BASE_URL}${PKMN_URL}/${name}/`);
    pkmnapi = pkmnapi.data;

    let showpkmn = {
      image: pkmnapi.sprites.other.dream_world.front_default,
      name: pkmnapi.name,
      type1: pkmnapi.types[0].type.name,
      type2: pkmnapi.types[1]?.type.name,
      id: pkmnapi.id,
      height: pkmnapi.height,
      weight: pkmnapi.weight,
      hp: pkmnapi.stats[0].base_stat,
      attack: pkmnapi.stats[1].base_stat,
      defense: pkmnapi.stats[2].base_stat,
      speed: pkmnapi.stats[5].base_stat,
    };

    res.send(showpkmn);
  } catch (error) {
    Pokemon.findOne({ where: { name: name }, include: Type })
      .then((pokemon) => {
        if (pokemon) {
          res.send(pokemon);
        } else {
          res.status(500).send("Not found!");
        }
      })
      .catch((error) => {
        next(error);
      });
  }
}

async function addPokemon(req, res, next) {
  const {
    name,
    hp,
    attack,
    defense,
    speed,
    height,
    weight,
    type1,
    type2,
    image,
  } = req.body;
  let newPokemon = {
    id: uuidv4(),
    name: name,
    hp: hp,
    attack: attack,
    defense: defense,
    speed: speed,
    height: height,
    weight: weight,
    image: image,
  };
  let types = [type1, type2 ? type2 : null];

  return Pokemon.create(newPokemon)
    .then((pokemon) => {
      pokemon.addTypes(types);
      res.send({ ...pokemon, types });
    })
    .catch((error) => next(error));
}
module.exports = {
  getPokemons,
  getPokemonById,
  getPokemonByName,
  addPokemon,
};

/* GET /pokemons: api   TERMINADO
    Obtener un listado de los primeros 12 pokemons desde pokeapi
    Debe devolver solo los datos necesarios para la ruta principal
GET /pokemons/{idPokemon}:  (id) (FALTA REVISAR EN LA DB)
    Obtener el detalle de un pokemon en particular
    Debe traer solo los datos pedidos en la ruta de detalle de pokemon:
    Ruta de detalle de Pokemon: 
    Los campos mostrados en la ruta principal para cada pokemon (imagen, nombre y tipos)
    N??mero de Pokemon (id)
    Estad??sticas (vida, fuerza, defensa, velocidad)
    Altura y peso

    Tener en cuenta que tiene que funcionar tanto para un id de un pokemon existente en pokeapi o uno creado por ustedes
GET /pokemons?name="...": (query)
    Obtener el pokemon que coincida exactamente con el nombre pasado como query parameter (Puede ser de pokeapi o creado por nosotros)
    Si no existe ning??n pokemon mostrar un mensaje adecuado
POST /pokemons: (body)
    Recibe los datos recolectados desde el formulario controlado de la ruta de creaci??n de pokemons por body
    Crea un pokemon en la base de datos */
