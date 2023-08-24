const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodasCategorias = (req, res) => {
    conexaoBanco.all("SELECT * FROM CATEGORIA", (err, rows) => {
        res.send(rows)
    })
}
