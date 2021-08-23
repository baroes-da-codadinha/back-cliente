const knex = require('../conexao');

const cadastrarCarrinho = async (req, res) => {
    const { id } = req.params;
    const { consumidor } = req;
    const { quantidade } = req.body;

    try {
        const encontrarProduto = await knex('produtos').where({ id }).first();

        if (!encontrarProduto) { 
            return res.status(404).json('Produto não foi encontrado.');
        }

        const carrinho = await knex('carrinho').insert({ consumidor_id: consumidor.id, restaurante_id: encontrarProduto.id, produto_id: id, nome_produto: encontrarProduto.nome, preco: encontrarProduto.preco, quantidade });

        if (!carrinho) {
            return res.status(404).json('Não foi possível cadastrar produto no carrinho.');
        }

        return res.status(200).json('Pedido adicionado.')
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = cadastrarCarrinho;