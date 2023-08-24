const { listarTodosProdutos } = require("./listarTodosProdutos")
const { listarUmProduto } = require("./listarUmProduto")
const { adcUmProduto} = require("./adcUmProduto")
const { atualizarUmProduto } = require("./atualizarUmProduto")
const { DeleteUmProduto } = require("./DeleteUmProduto")

module.exports = {
    listarTodosProdutos: listarTodosProdutos,
    listarUmProduto: listarUmProduto,
    adcUmProduto: adcUmProduto,
    atualizarUmProduto: atualizarUmProduto,
    DeleteUmProduto: DeleteUmProduto
}