const router = require("express").Router();
const controller = require("../controllers/venda/_vendaControllerindex");

router.get("/ListarTodasVendas", controller.listarTodasVendas);
router.get("/ListarUmaVenda", controller.listarUmaVenda);

router.post("/adcUmaVenda",controller.adcUmaVenda );
router.post("/atualizarUmaVenda, controller.atualizarUmaVenda");

module.exports = router;
