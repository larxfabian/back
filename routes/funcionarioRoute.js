const router = require("express").Router();
const controller = require("../controllers/funcionario/_funcionarioControllerindex");

router.get("/ListarTodosFuncionarios", controller.listarTodosFuncionarios);
router.get("/ListarUmFuncionario", controller.listarUmFuncionario);

router.post("/adcUmFuncionario", controller.adcUmFuncionario);
router.post("/atualizarUmFuncionario", controller.atualizarUmFuncionario);

module.exports = router;