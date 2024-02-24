const knex = require('../connection');

const registerTheme = async (req, res) => {
    const {
        descricao
    } = req.body;

    try {
        const newTheme = await knex('tema')
            .insert({
                descricao
            })
            .returning('*');

        if (!newTheme) {
            res.status(400).json({ mensagem: 'Erro ao registrar tema' });
        }

        res.status(201).json({ mensagem: 'Tema registrado com sucesso:', tema: newTheme });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

module.exports = {
    registerTheme
};