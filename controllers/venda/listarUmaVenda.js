const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmaVenda = (req, res) => {
    res.send("executou de dentro da controladora uma venda")
}