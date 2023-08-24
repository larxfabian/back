const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodosCargos = (req, res) => {
    conexaoBanco.all("SELECT * FROM CARGO", (err, rows) => {
        res.send(rows)
    })
}


