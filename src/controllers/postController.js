const knex = require('../connection');

const registerPost = async (req, res) => {
    const {
        titulo,
        texto,
        usuario_id,
        tema_id
    } = req.body;

    try {
        const existingUser = await knex('usuario').where({ id: usuario_id }).first();

        if (!existingUser) {
            return res.status(400).json({ mensagem: 'Usuário não encontrado.' });
        }

        const existingTheme = await knex('tema').where({ id: tema_id }).first();

        if (!existingTheme) {
            return res.status(400).json({ mensagem: 'Tema não encontrado.' });
        }

        const newPost = await knex('postagem')
            .insert({
                titulo,
                texto,
                usuario_id,
                tema_id
            })
            .returning('*');

        if (!newPost) {
            res.status(400).json({ mensagem: 'Erro ao fazer postagem' });
        }

        res.status(201).json({ mensagem: 'Postagem realizada com sucesso:', post: newPost });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
}


const updatePost = async (req, res) => {
    const { id } = req.params;
    const {
        titulo,
        texto,
        usuario_id,
        tema_id
    } = req.body;

    try {
        // const existingPost = await knex('postagem').where({ id }).first();

        // if (!existingPost) {
        //     return res.status(400).json({ mensagem: 'Post não encontrado.' });
        // }
        const existingUser = await knex('usuario').where({ id: usuario_id }).first();

        if (!existingUser) {
            return res.status(400).json({ mensagem: 'Usuário não encontrado.' });
        }

        const existingTheme = await knex('tema').where({ id: tema_id }).first();

        if (!existingTheme) {
            return res.status(400).json({ mensagem: 'Tema não encontrado.' });
        }
        const updatedPost = await knex('postagem')
            .where({ id })
            .update({
                titulo,
                texto,
                usuario_id,
                tema_id
            })
            .returning('*');

        if (updatedPost.length === 0) {
            return res.status(400).json({ mensagem: "Post não encontrado" });
        }

        return res
            .status(200)
            .json({ mensagem: "Post atualizado com sucesso!", postagem: updatedPost });

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
}


module.exports = {
    registerPost,
    updatePost
};