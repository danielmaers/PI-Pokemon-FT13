const { Type } = require('../db');
const axios = require("axios");
const {BASE_URL} = require("../../constants");


async function getAllTypes(req, res, next){ // si no funciona sacar el async
    return Type.findAll()
    .then((types)=>
    res.send(types))
    .catch((err)=>next(err))
}

module.exports = {
    getAllTypes
    }

/*traer
* todos los tipos de pokemon posibles, (en teoria, hecho)
* En una primera instancia deberán traerlos
desde pokeapi y guardarlos en su propia base
de datos y luego ya utilizarlos desde allí*/