const { listarTodosCargos } = require("./listarTodosCargos")
const { listarUmCargo } = require("./listarUmCargo")
const { adcUmCargo } = require("./adcUmCargo")
const { atualizarUmCargo } = require("./atualizarUmCargo")
const { DeleteCargo } = require("./DeleteCargo")


module.exports = {
    listarTodosCargos: listarTodosCargos,
    listarUmCargo: listarUmCargo,
    adcUmCargo: adcUmCargo,
    atualizarUmCargo: atualizarUmCargo,
    DeleteCargo:DeleteCargo
}