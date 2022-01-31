const { Type } = require('../db');


//comentario de prueba para el grupo 01
async function getAllTypes(req, res, next){ 

   
    return Type.findAll()
    .then((types)=>
    res.send(types))
    .catch((err)=>next(err))
}

module.exports = {
    getAllTypes
    }

