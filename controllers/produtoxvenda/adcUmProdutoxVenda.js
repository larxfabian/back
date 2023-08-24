const { conexaoBanco } = require("../../banco/conexaoDB");

exports.adcUmProdutoxVenda = (req, res) => {
    console.log(req.body);
   
    conexaoBanco.run("INSERT INTO PRODUTOXVENDA(ID_PRODUTO,NOME_PRODUTO,ID_VENDA,QUANTIDADE) VALUES (?, ?, ?, ?,)",
        [ req.body.produto, req.body.nome, req.body.venda, req.body.quantidade],
        function (err) {
            if (err) {
                return res.status(500).json({ msg: "erro ao inserir no banco" });
            }
            return res.status(202).json({msg:"inserido com sucesso!!!!"})
            });
        }