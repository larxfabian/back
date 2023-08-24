const { conexaoBanco } = require("../../banco/conexaoDB");

exports.adcUmaCategoria = (req, res) => {
    console.log(req.body);
    if( !req.body?.nome )
        return res.status(400).json({msg: "corpo mal formado ou informações faltantes"});

    conexaoBanco.run("INSERT INTO CATEGORIA(NOME) VALUES (?)", [req.body.nome], (err) => {
        if(err)
            return res.status(500).json({msg: "erro ao inserir no banco"})
    });
    
    res.status(201).json({msg: "inserido com sucesso!!!"})
}
