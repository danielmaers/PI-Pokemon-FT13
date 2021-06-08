const { Pokemon } = require('../db');


async function addPokemon(req, res, next){
    const pokemon = req.body;
    if(!pokemon){return res.send({
        error: 500,
        message: "Debe ingresar un nuevo pokemon correctamente"
    })}
    try {        
        const createdPokemon = await Pokemon.create(pokemon);
        return res.send(createdPokemon);  
    } catch (error) {
        next(error)
    }
}

module.exports = {
    addPokemon
}



/* GET /pokemons: api
    Obtener un listado de los primeros 12 pokemons desde pokeapi
    Debe devolver solo los datos necesarios para la ruta principal
GET /pokemons/{idPokemon}:  (id)
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

