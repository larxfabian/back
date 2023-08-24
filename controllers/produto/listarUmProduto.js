const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmProduto = (req, res) => {
    res.send("executou de dentro da controladora um produto")
}