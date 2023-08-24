const { listarTodasVendas } = require("./listarTodasVendas")
const { listarUmaVenda } = require("./listarUmavenda")
const { adcUmaVenda} = require("./adcUmaVenda")
const { atualizarUmaVenda } = require("./atualizarUmaVenda")


module.exports = {
    listarTodasVendas: listarTodasVendas,
    listarUmaVenda: listarUmaVenda,
    adcUmaVenda: adcUmaVenda,
    atualizarUmaVenda: atualizarUmaVenda

}