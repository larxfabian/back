const router = require("express").Router();
const controller = require("../controllers/endereco/_enderecoControllerindex");

router.get("/ListarTodosEnderecos", controller.listarTodosEnderecos);
router.get("/ListarUmEndereco", controller.listarUmEndereco);

router.post("/AdcUmEndereco", controller.adcUmEndereco);
router.post("/AtualizarUmEndereco", controller.atualizarUmEndereco);

router.delete("/DeleteUmEndereco", controller.DeleteUmEndereco);

module.exports = router;
