const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmFuncionario = (req, res) => {
    res.send("executou de dentro da controladora um funcionario")
}