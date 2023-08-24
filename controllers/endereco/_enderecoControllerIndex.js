const { listarTodosEnderecos } = require("./listarTodosEnderecos")
const { listarUmEndereco } = require("./listarUmEndereco")
const { adcUmEndereco} = require("./adcUmEndereco")
const { atualizarUmEndereco } = require("./atualizarUmEndereco")
const { DeleteUmEndereco } = require("./DeleteUmEndereco")

module.exports = {
    listarTodosEnderecos: listarTodosEnderecos,
    listarUmEndereco: listarUmEndereco,
    adcUmEndereco: adcUmEndereco,
    atualizarUmEndereco: atualizarUmEndereco,
    DeleteUmEndereco: DeleteUmEndereco

}