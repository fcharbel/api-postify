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


module.exports = {
    registerUser,
    updateUser
};