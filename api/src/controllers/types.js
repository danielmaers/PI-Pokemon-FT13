const { Type } = require('../db');



async function getAllTypes(req, res, next){ 

   
    return Type.findAll()
    .then((types)=>
    res.send(types))
    .catch((err)=>next(err))
}

module.exports = {
    getAllTypes
    }

