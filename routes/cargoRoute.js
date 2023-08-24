const router = require("express").Router();
const controller = require("../controllers/cargo/_cargoControllerIndex");

router.get("/listarTodosCargos", controller.listarTodosCargos);
router.get("/listarUmCargo", controller.listarUmCargo);

router.post("/AdcUmCargo", controller.adcUmCargo);
router.post("/AtualizarUmCargo", controller.atualizarUmCargo);

router.delete("/DeleteCargo", controller.DeleteCargo);


module.exports = router;