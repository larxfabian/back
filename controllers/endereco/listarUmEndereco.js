const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmEndereco = (req, res) => {
    res.send("executou de dentro da controladora um Endereco")
}