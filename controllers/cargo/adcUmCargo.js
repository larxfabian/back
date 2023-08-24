const { conexaoBanco } = require("../../banco/conexaoDB");

exports.adcUmCargo = (req, res) => {
    console.log(req.body);
    if( !req.body?.nome )
        return res.status(400).json({msg: "corpo mal formado ou informações incompletas"});

    conexaoBanco.run("INSERT INTO CARGO(NOME) VALUES (?)", [req.body.nome], (err) => {
        if(err)
            return res.status(500).json({msg: "erro ao inserir no banco"})
    });
    
    res.status(201).json({msg: "inserido com sucesso!"})
}
