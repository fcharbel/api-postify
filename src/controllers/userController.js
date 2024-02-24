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

module.exports = {
    registerUser
};