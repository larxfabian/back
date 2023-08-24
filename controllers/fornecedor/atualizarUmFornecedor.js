const { conexaoBanco } = require("../../banco/conexaoDB");

exports.atualizarUmFornecedor = (req, res) => {
    if(!req.query?.id || !req.body?.nome)
        return res.status(400).json({msg: "corpo mal formado ou informações incompletas"});

    conexaoBanco.run("UPDATE FORNECEDOR SET NOME = ? WHERE ID = ?", [req.body.nome, req.query.id], (err) => {
        if(err)
            return res.status(500).json({msg: "erro ao inserir no banco"})
    });

    res.status(200).json({msg: "alterado com sucesso!"});
}