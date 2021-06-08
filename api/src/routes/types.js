const { Router } = require('express');

const router = Router();

router.get("/", (req,res)=>{
    res.send("ruta types");
})


module.exports = router;