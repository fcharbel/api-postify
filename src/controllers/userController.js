const knex = require('../connection');

const registerUser = async (req, res) => {
    const {
        nome,
        email,
        foto
    } = req.body;

    try {

        const existingEmail = await knex('usuario').where({ email }).first();

        if (existingEmail) {
            return res.status(400).json({ mensagem: 'Email já cadastrado.' });
        }

        const newUser = await knex('usuario')
            .insert({
                nome,
                email,
                foto
            })
            .returning('*');

        if (!newUser) {
            res.status(400).json({ mensagem: 'Erro ao registrar aluno' });
        }

        res.status(201).json({ mensagem: 'Usuário registrado com sucesso:', usuario: newUser });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
}

const updateUser = async (req, res) => {
    const { id } = req.params;
    const {
        nome,
        email,
        foto
    } = req.body;

    try {
        const emailExists = await knex('usuario')
            .where({ email })
            .whereNot({ id })
            .first();

        if (emailExists) {
            return res.status(400).json({ mensagem: "Email já cadastrado." });
        }
        const updatedUser = await knex('usuario')
            .where({ id })
            .update({
                nome,
                email,
                foto
            })
            .returning('*');

        if (updatedUser.length === 0) {
            return res.status(400).json({ mensagem: "Usuário não encontrado" });
        }

        return res
            .status(200)
            .json({ mensagem: "Usuário atualizado com sucesso!", usuário_atualizado: updatedUser });

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor', error: error.message });
    }
}

const getUsers = async (req, res) => {
    try {
        const allUsers = await knex('usuario');
        res.status(200).json(allUsers);

    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const detailUser = async (req, res) => {
    const { id } = req.params;
    try {
        const user = await knex('usuario').where({ id }).first();

        if (!user) {
            return res.status(404).json({ mensagem: 'Usuário não encontrado' });
        }

        const detailedUser = await knex('usuario')
            .select('usuario.nome', 'usuario.email', 'postagem.id', 'postagem.titulo', 'postagem.texto', 'postagem.data', 'tema.descricao as tema')
            .leftJoin('postagem', 'usuario.id', 'postagem.usuario_id')
            .leftJoin('tema', 'postagem.tema_id', 'tema.id')
            .where('usuario.id', id);

        const detailedUserFormatted = {
            nome: detailedUser[0].nome,
            email: detailedUser[0].email,
            posts: detailedUser.map(postagem => ({
                id: postagem.id,
                titulo: postagem.titulo,
                texto: postagem.texto,
                data: postagem.data,
                tema: postagem.tema
            }))
        };

        res.status(200).json(detailedUserFormatted);
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        const userFound = await knex('usuario').where({ id }).first();

        if (!userFound) {
            return res.status(404).json({ mensagem: 'Usário não encontrado.' });
        }

        await knex('usuario').del().where({ id });

        return res.status(200).json({ mensagem: 'Usuário excluído com sucesso!' });
    } catch (error) {
        res.status(500).json({ mensagem: 'Erro interno do servidor' });
    }
}



module.exports = {
    registerUser,
    updateUser,
    getUsers,
    detailUser,
    deleteUser
};