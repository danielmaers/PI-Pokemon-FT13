const { Router } = require("express");
const Pokemons = require("./pokemons");
const Types = require("./types");
// Importar todos los routers;
// Ejemplo: const authRouter = require('./auth.js');

const router = Router();

router.use("/pokemons", Pokemons);
router.use("/types", Types);

router.get("/", (req, res) => {
  res.send("Back End de PokeApp");
});
// Configurar los routers
// Ejemplo: router.use('/auth', authRouter);

module.exports = router;
