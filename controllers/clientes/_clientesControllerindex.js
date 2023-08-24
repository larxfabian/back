const { listarUmCliente } = require("./listarUmCliente")
const { listarTodosClientes } = require("./listarTodosClientes")
const { adcUmCliente } = require("./adcUmCliente")
const { atualizarUmCliente } = require("./atualizarUmCliente")
const { DeleteClientes } = require("./DeleteClientes")

module.exports = {
    listarUmCliente: listarUmCliente,
    listarTodosClientes: listarTodosClientes,
    adcUmCliente: adcUmCliente,
    atualizarUmCliente: atualizarUmCliente,
    DeleteClientes: DeleteClientes
}
