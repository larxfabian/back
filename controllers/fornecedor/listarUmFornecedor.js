const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmFornecedor = (req, res) => {
    res.send("executou de dentro da controladora um Fornecedor")
}