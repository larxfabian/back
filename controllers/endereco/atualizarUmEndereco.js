const { conexaoBanco } = require("../../banco/conexaoDB");

exports.atualizarUmEndereco = (req, res) => {
    if(!req.query?.id || !req.body?.rua || !req.body?.bairro  || !req.body?.numero  || !req.body?.cep)
        return res.status(400).json({msg: "corpo mal formado ou informações incompletas"});

    conexaoBanco.run("UPDATE ENDERECO SET NOME = ? WHERE ID = ?", [req.body.rua, , req.query.bairro, req.query.numero, req.query.id, req.query.cep], (err) => {
        if(err)
            return res.status(500).json({msg: "erro ao inserir no banco"})
    });

    res.status(200).json({msg: "alterado com sucesso!"});
}