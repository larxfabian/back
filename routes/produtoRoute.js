const router = require("express").Router();
const controller = require("../controllers/produto/_produtoControllerIndex");

router.get("/listarTodosProdutos", controller.listarTodosProdutos);
router.get("/listarUmProduto", controller.listarUmProduto);

router.post("/adcUmProduto",controller.adcUmProduto );
router.post("/atualizarUmProduto", controller.atualizarUmProduto);

router.delete("/DeleteUmProduto", controller.DeleteUmProduto);

module.exports = router;