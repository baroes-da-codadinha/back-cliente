const knex = require('../conexao');

// const listarPedido = async (req, res) => {
//     const { consumidor } = req;

//     try {
        
//     } catch (error) {
//         return res.status(400).json(error.message);
//     }
// }

const cadastrarPedidos = async (req, res) => {
    const { consumidor } = req;
        
    try {
        const encontrarEndereco = await knex('endereco').where({ consumidor_id: consumidor.id }).first();

        if (!encontrarEndereco) {
            return res.status(404).json('Endereco não foi encontrado.');
        }

        const cadastrarPedido = await knex('pedido').insert({ consumidor_id: consumidor.id, restaurante_id: restaurante.id, endereco_id: encontrarEndereco.id, subtotal, taxa, total });

        if (!cadastrarPedido) {
            return res.status(404).json('Pedido não foi cadastrado.');
        }

        return res.status(200).json('Pedido Confirmado! Agora é só aguardar o seu pedido');
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = cadastrarPedidos;