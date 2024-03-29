const knex = require('../connection');

const registerTheme = async (req, res) => {
    const {
        descricao
    } = req.body;

    try {
        const theme = await knex('tema')
            .where('descricao', 'ilike', descricao)
            .first();

        if (theme) {
            return res.status(400).json({ mensagem: "Tema já registrado", Tema: theme });
        }
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

const updateTheme = async (req, res) => {
    const { id } = req.params;
    const {
        descricao
    } = req.body;

    try {
        const theme = await knex('tema')
            .where('descricao', 'ilike', descricao)
            .whereNot({ id })
            .first();

        if (theme) {
            return res.status(400).json({ mensagem: "Tema já registrado", Tema: theme });
        }
        const updatedTheme = await knex('tema')
            .where({ id })
            .update({
                descricao
            })
            .returning('*');

        if (updatedTheme.length === 0) {
            return res.status(400).json({ mensagem: "Tema não encontrado" });
        }

        return res
            .status(200)
            .json({ mensagem: "Tema atualizado com sucesso!", tema_atualizado: updatedTheme });

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const getThemes = async (req, res) => {
    try {
        const allThemes = await knex('tema');
        res.status(200).json(allThemes);

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const deleteTheme = async (req, res) => {
    const { id } = req.params;

    try {
        const themeFound = await knex('tema').where({ id }).first();

        if (!themeFound) {
            return res.status(404).json({ mensagem: 'Tema não encontrado.' });
        }

        await knex('tema').del().where({ id });

        return res.status(200).json({ mensagem: 'Tema excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}
module.exports = {
    registerTheme,
    updateTheme,
    getThemes,
    deleteTheme
};