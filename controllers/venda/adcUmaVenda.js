const { conexaoBanco } = require("../../banco/conexaoDB");

exports.adcUmaVenda= (req, res) => {
    console.log(req.body);
   
    conexaoBanco.run("INSERT INTO VENDA (ID_PRODUTO,ID_CLIENTES,ID_FUNCIONARIO,DT_VENDA,TOTAL) VALUES (?, ? ,?, ?, ?)",
        [req.body.produto, req.body.clientes, req.body.funcionario, req.body.dt_venda, req.body.total],
        function (err) {
            if (err) {
                return res.status(500).json({ msg: "erro ao inserir no banco" });
            }
            return res.status(202).json({msg:"inserido com sucesso!!!!"})
            });
        }