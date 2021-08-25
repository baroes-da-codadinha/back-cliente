const knex = require('../conexao');
 
const cadastrarPedidos = async (req, res) => {
    const { consumidor } = req;
        
    try {
        const encontrarEndereco = await knex('endereco').where({ consumidor_id: consumidor.id }).first();

        if (!encontrarEndereco) {
            return res.status(404).json('Endereco não foi encontrado.');
        }

        const encontrarProdutos = await knex('carrinho').where({ consumidor_id: consumidor.id });

        if (!encontrarProdutos) {
            return res.status(404).json('Carrinho vazio.')
        }

        let subtotal = 0, total = 0;
        encontrarProdutos.forEach(produto => {
            subtotal = produto.valor_pagamento + subtotal;
        });

        const encontrarRestaurante = await knex('restaurantes').where({ id: encontrarProdutos[0].restaurante_id }).first();

        if (!encontrarRestaurante) {
            return res.status(404).json('Restaurante não foi encontrado.');
        }

        total = subtotal + encontrarRestaurante.taxa_entrega;

        const cadastrarPedido = await knex('pedido').insert({ consumidor_id: consumidor.id, restaurante_id: encontrarRestaurante.id, endereco_id: encontrarEndereco.id, subtotal, taxa: encontrarRestaurante.taxa_entrega, total });

        if (!cadastrarPedido) {
            return res.status(404).json('Pedido não foi cadastrado.');
        }
    
        return res.status(200).json('Pedido Confirmado! Agora é só aguardar o seu pedido');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = cadastrarPedidos;