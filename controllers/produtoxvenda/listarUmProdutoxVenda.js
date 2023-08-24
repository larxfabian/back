const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmProdutoxVenda= (req, res) => {
    res.send("executou de dentro da controladora um ProdutoxVenda")
}