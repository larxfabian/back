const router = require("express").Router();
const controller = require("../controllers/clientes/_clientesControllerindex");

router.get("/ListarTodosClientes", controller.listarTodosClientes);
router.get("/listarUmCliente", controller.listarUmCliente);

router.post("/adcUmCliente", controller.adcUmCliente);
router.post("/atualizarUmCliente", controller.atualizarUmCliente);

router.delete("/DeleteClientes", controller.DeleteClientes);

module.exports = router;
