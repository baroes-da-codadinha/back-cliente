const knex = require('../conexao');


const cadastrarPedidos = async (req, res) => {
const { restaurante_id, carrinho, endereco  } = req.body
let subtotal = 0;
//carrinho = [{id,  quantidade}, {id, quantidade},]
    try {
        
        carrinho.forEach(produto => {
            await knex('produtos').where({id: produto.id, ativo: true});

        });

        
    } catch (error) {
        return res.status(400).json(error.message);
    }
}

module.exports = cadastrarPedidos;