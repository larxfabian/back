const { listarTodasCategorias } = require("./listarTodasCategorias")
const { listarUmaCategoria } = require("./listarUmaCategoria")
const { adcUmaCategoria }  = require("./adcUmaCategoria")
const { atualizarUmaCategoria }  = require("./atualizarUmaCategoria")
const { DeleteUmaCategoria } = require("./DeleteUmaCategoria")

module.exports = {
    listarTodasCategorias: listarTodasCategorias,
    listarUmaCategoria: listarUmaCategoria,
    adcUmaCategoria,
    atualizarUmaCategoria,
    DeleteUmaCategoria
}