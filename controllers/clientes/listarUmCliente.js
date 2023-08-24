const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmCliente = (req, res) => {
    res.send("executou de dentro da controladora um cliente")
}