const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodasVendas = (req, res) => {
    conexaoBanco.all("SELECT * FROM VENDA", (err, rows) => {
        res.send(rows)
    })
}
