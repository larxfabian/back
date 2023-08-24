const { conexaoBanco } = require("../../banco/conexaoDB");

exports.adcUmFuncionario = (req, res) => {
    console.log(req.body);
    const body = req.body;
    if (!req.body?.nome || !req.body?.telefone || !req.body?.email || !req.body?.rua || !req.body?.bairro || !req.body.cep || !req.body.numero || !req.body?.dt_admissao || !req.body?.cargo)
        return res.status(400).json({ msg: "corpo mal formado ou informações incompletas" });

    conexaoBanco.run("INSERT INTO ENDERECO(RUA, BAIRRO, CEP, NUMERO) VALUES (?, ?, ?, ?)", [req.body.rua, req.body.bairro, req.body.cep, req.body.numero], function (err) {
        if (err)
            return res.status(500).json({ msg: "erro ao inserir no banco" });
        const ID_ENDERECO = this.lastID;

        // conexaoBanco.run("INSERT INTO CARGO(NOME) VALUES (?)", [req.body.cargo], function (err) {
        //     if (err)
        //         return res.status(500).json({ msg: "erro ao inserir no banco" });
        //     const ID_CARGO = this.lastID;

            conexaoBanco.run("INSERT INTO FUNCIONARIO(NOME, TELEFONE, EMAIL, DT_ADMISSAO, ID_CARGO, ID_ENDERECO) VALUES (?, ?, ?, ?, ?, ?)", [req.body.nome, req.body.telefone, req.body.email, req.body.dt_admissao, req.body.cargo, ID_ENDERECO], (err2) => {
                if (err2)
                    return res.status(500).json({ msg: "erro ao inserir no banco" });
                res.status(201).json({ msg: "inserido com sucesso!" });
            });
        // });
    });
};