const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarUmCargo = (req, res) => {
    res.send("executou de dentro da controladora um cargo")
}