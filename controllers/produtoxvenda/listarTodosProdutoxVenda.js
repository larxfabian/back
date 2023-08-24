const { conexaoBanco } = require("../../banco/conexaoDB");

exports.listarTodosProdutoxVenda = (req, res) => {
    conexaoBanco.all("SELECT * FROM PRODUTOxVENDA", (err, rows) => {
        res.send(rows)
    })
}
