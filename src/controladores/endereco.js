const knex = require('../conexao');
const schemaCadastrarEndereco = require('../validacoes/schemaCadastrarEndereco');

const cadastrarEndereco = async (req, res) => {
    const { consumidor } = req;
    const { cep, endereco, complemento } = req.body;

    try {
        await schemaCadastrarEndereco.validate(req.body);

        const cadastrarEndereco = await knex('endereco').insert({ consumidor_id: consumidor.id, cep, endereco, complemento}).returning('*');

        if (!cadastrarEndereco) {
            return res.status(404).json('Algo inesperado aconteceu, tente novamente.');
        }

        return res.status(200).json('Endereço adicionado com sucesso.');
    } catch (error) {
        
    }
}

module.exports = cadastrarEndereco;