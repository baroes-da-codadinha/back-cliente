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

        const listarCarinnho = await knex('carrinho').where({ consumidor_id: consumidor.id });
        
        let carrinho, valorPagamento = 0;

        if (listarCarinnho.length == 0) {
            valorPagamento = encontrarProduto.preco * quantidade;

            carrinho = await knex('carrinho').insert({ consumidor_id: consumidor.id, restaurante_id: encontrarProduto.restaurante_id, produto_id: id, nome_produto: encontrarProduto.nome, preco: encontrarProduto.preco, quantidade, valor_pagamento: valorPagamento });

            if (!carrinho) {
                return res.status(404).json('Não foi possível cadastrar produto no carrinho.');
            }
        }

        if (listarCarinnho.length > 0 && encontrarProduto.restaurante_id != listarCarinnho[0].restaurante_id) {
            return res.status(400).json('Produto de outro restaurante.');
        }

        if (listarCarinnho.length > 0 && encontrarProduto.restaurante_id == listarCarinnho[0].restaurante_id) {
            valorPagamento = encontrarProduto.preco * quantidade;

            carrinho = await knex('carrinho').insert({ consumidor_id: consumidor.id, restaurante_id: encontrarProduto.restaurante_id, produto_id: id, nome_produto: encontrarProduto.nome, preco: encontrarProduto.preco, quantidade, valor_pagamento: valorPagamento });

            if (!carrinho) {
                return res.status(404).json('Não foi possível cadastrar produto no carrinho.');
            }
        }

        return res.status(200).json('Pedido adicionado.');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = cadastrarCarrinho;