const router = require("express").Router();
const controller = require("../controllers/fornecedor/_fornecedorControllerIndex");

router.get("/listarTodosFornecedores", controller.listarTodosFornecedores);
router.get("/listarUmFornecedor", controller.listarUmFornecedor);

router.post("/AdcUmFornecedor", controller.adcUmFornecedor);
router.post("/AtualizarUmFornecedor", controller.atualizarUmFornecedor);

router.delete("/DeleteUmFornecedor", controller.DeleteUmFornecedor);

module.exports = router;
