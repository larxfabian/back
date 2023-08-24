const router = require("express").Router();
const controller = require("../controllers/categoria/_categoriasControllerIndex");

router.get("/ListarTodasCategorias", controller.listarTodasCategorias);
router.get("/ListarUmaCategoria", controller.listarUmaCategoria);

router.post("/AdcUmaCategoria", controller.adcUmaCategoria);
router.post("/AtualizarUmaCategoria", controller.atualizarUmaCategoria);

router.delete("/DeleteUmaCategoria", controller.DeleteUmaCategoria);

module.exports = router;