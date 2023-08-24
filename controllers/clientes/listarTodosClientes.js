const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodosClientes = (req, res) => {
    conexaoBanco.all("SELECT * FROM CLIENTES", (err, rows) => {
        res.send(rows)
    })
}
