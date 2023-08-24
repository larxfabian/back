const { conexaoBanco } = require("../../banco/conexaoDB");

exports.adcUmProduto = (req, res) => {
    console.log(req.body);
   
    conexaoBanco.run("INSERT INTO PRODUTO(NOME,PRECO, ID_FORNECEDOR,ID_CATEGORIA,ESTOQUE) VALUES (?, ?,?, ?, ?)",
        [req.body.nome, req.body.preco, req.body.fornecedor_id, req.body.categoria, req.body.estoque],
        function (err) {
            if (err) {
                return res.status(500).json({ msg: "erro ao inserir no banco" });
            }
            return res.status(202).json({msg:"inserido com sucesso!!!!"})
            });
        }