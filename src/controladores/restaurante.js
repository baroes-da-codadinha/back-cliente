const knex = require('../conexao');

const listarRestaurantes = async (req, res) => {
    const { nome } = req.body;
    
    try {
        const listarRestaurantes = await knex('restaurantes').whereILike({ nome }).first();

        if (!listarRestaurantes) {
            return res.status(404).json('Restaurante não foi encontrado');
        }

        return res.status(200).json(listarRestaurantes);
    } catch (error) {
        return res.status(400).json(error.message);
    }
};

module.exports = listarRestaurantes;