const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodosEnderecos = (req, res) => {
    conexaoBanco.all("SELECT * FROM ENDERECO", (err, rows) => {
        res.send(rows)
    })
}
