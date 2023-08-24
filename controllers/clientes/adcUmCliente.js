const { conexaoBanco } = require("../../banco/conexaoDB");

exports.adcUmCliente = (req, res) => {
    console.log(req.body);
    if (!req.body?.nome || !req.body?.telefone || !req.body?.email || !req.body?.rua || !req.body?.bairro || !req.body?.cep || !req.body?.numero)
        return res.status(400).json({ msg: "corpo mal formado ou informações incompletas" });
    
    conexaoBanco.run("INSERT INTO ENDERECO(RUA, BAIRRO, CEP, NUMERO) VALUES (?, ?, ?, ?)", [req.body.rua, req.body.bairro, req.body.cep, req.body.numero], function (err) {
        if (err)
        return res.status(500).json({ msg: "erro ao inserir no banco" })
        conexaoBanco.run("INSERT INTO CLIENTES(NOME, TELEFONE, EMAIL, ID_ENDERECO) VALUES (?, ?, ?, ?)", [req.body.nome, req.body.telefone, req.body.email, this.lastID], (err2) => {
            if (err2)
                return res.status(500).json({ msg: "erro ao inserir no banco" })
            res.status(201).json({ msg: "inserido com sucesso!" })
        });
    });

}
