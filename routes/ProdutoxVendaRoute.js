const router = require("express").Router();
const controller = require("../controllers/ProdutoxVenda/_produtoxvendaControllerindex");

router.get("/ListarTodosProdutoxVenda", controller.listarTodosProdutoxVenda);
router.get("/ListarUmProdutoxVenda", controller.listarUmProdutoxVenda);

router.post("/adcUmProdutoxVenda", controller.adcUmProdutoxVenda);
router.post("/atualizarUmProdutoxVenda", controller.atualizarUmProdutoxVenda);


module.exports = router;
