const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodosFuncionarios = (req, res) => {
    conexaoBanco.all("SELECT * FROM FUNCIONARIO", (err, rows) => {
        res.send(rows)
    })
}
