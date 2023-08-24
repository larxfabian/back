const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodosFornecedores = (req, res) => {
    conexaoBanco.all("SELECT * FROM FORNECEDOR", (err, rows) => {
        res.send(rows)
    })
}
