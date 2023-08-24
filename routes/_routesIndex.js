const router = require("express").Router();
const rotaPadrao = "/apiMercado/";

router.use(rotaPadrao + "Categoria", require("./categoriaRoute"));
router.use(rotaPadrao + "Funcionario", require("./funcionarioRoute"));
router.use(rotaPadrao + "Clientes", require("./clientesRoute"));
router.use(rotaPadrao + "Cargo", require("./CargoRoute"));
router.use(rotaPadrao + "Endereco", require("./EnderecoRoute"));
router.use(rotaPadrao + "Fornecedor", require("./FornecedorRoute"));
router.use(rotaPadrao + "Produto", require("./ProdutoRoute"));
router.use(rotaPadrao + "ProdutoxVenda", require("./ProdutoxVendaRoute"));
router.use(rotaPadrao + "Venda", require("./VendaRoute"));

module.exports = router;