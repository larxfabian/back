const { conexaoBanco } = require("../../banco/conexaoDB");

exports.DeleteCargo = (req, res) => {
    if (!req.query?.id)
        return res.status(400).json({ msg: "corpo mal formado ou informações incompletas" });

    conexaoBanco.run("DELETE FROM CARGO WHERE ID = ?", [req.query.id], (err) => {
        if (err)
            return res.status(500).json({ msg: "erro ao deletar no banco" })
        res.status(200).json({ msg: "removido com sucesso!" });
    });

}