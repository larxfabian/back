const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodosProdutos = (req, res) => {
    conexaoBanco.all("SELECT * FROM PRODUTO", (err, rows) => {
        res.send(rows)
    })
}
