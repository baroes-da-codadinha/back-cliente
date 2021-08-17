const knex = require('../conexao');

const listarRestaurantes = async (req, res) => {
    let restaurantes = '';
    try {
        if (req.body.busca) {
            const { busca } = req.body;

            restaurantes = await knex('restaurantes')
                .where('nome', 'like', `${busca}%`);
        } else {
            restaurantes = await knex('restaurantes');
        }

        return res.status(200).json(restaurantes);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

const listarProdutosRestaurantes = async (req, res) => {
    const { id } = req.params;

    try {
        const produtos = await knex('produtos')
            .where({ restaurante_id: id });

        return res.status(200).json(produtos);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = {
    listarRestaurantes,
    listarProdutosRestaurantes
}