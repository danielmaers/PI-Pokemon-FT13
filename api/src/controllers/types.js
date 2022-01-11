const { Type } = require('../db');


//otro comentario
async function getAllTypes(req, res, next){ 

   
    return Type.findAll()
    .then((types)=>
    res.send(types))
    .catch((err)=>next(err))
}

module.exports = {
    getAllTypes
    }

