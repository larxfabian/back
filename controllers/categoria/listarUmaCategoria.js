const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmaCategoria = (req, res) => {
    res.send("executou de dentro da controladora uma categoria")
}