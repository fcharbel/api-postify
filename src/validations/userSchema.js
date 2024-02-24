const joi = require('joi')

const userSchema = joi.object({
    nome: joi.string().required().min(3).messages({
        'any.required': 'O campo nome é obrigatório',
        'string.empty': 'O campo nome é obrigatório',
        'string.min': 'O campo nome deve ter no mínimo 3 caracteres'
    }),
    email: joi.string().email().required().messages({
        'any.required': 'O campo email é obrigatório',
        'string.empty': 'O campo email não pode estar vazio',
        'string.email': 'O campo email precisa ter um email válido',
    }),
    foto: joi.string().trim().messages({
        'string.base': 'O campo deve ser uma string',
        'string.trim': 'O campo não pode conter espaços em branco'
    })
});

module.exports = { userSchema };