const { Type } = require('../db');
const axios = require("axios");
const {BASE_URL} = require("../../constants");


async function getAllTypes(req, res, next){ // si no funciona sacar el async
    const type=await Type.findAll()
    
    if(type.length===0){
        const apitype = await axios.get(`${BASE_URL}type`)
    await Promise.all(apitype.data.results.map((type, index)=>{
        let pkmntype = {
            id: ++index,
            name: type.name
        }
        Type.findOrCreate({where: pkmntype})
    }))
  }
   
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