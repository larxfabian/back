const { listarTodosFornecedores } = require("./listarTodosFornecedores")
const { listarUmFornecedor } = require("./listarUmFornecedor")
const { adcUmFornecedor} = require("./adcUmFornecedor")
const { atualizarUmFornecedor } = require("./atualizarUmFornecedor")
const {DeleteUmFornecedor} = require("./DeleteUmFornecedor")


module.exports = {
    listarTodosFornecedores: listarTodosFornecedores,
    listarUmFornecedor: listarUmFornecedor,
    atualizarUmFornecedor: atualizarUmFornecedor,
    adcUmFornecedor: adcUmFornecedor,
    DeleteUmFornecedor:DeleteUmFornecedor
}
