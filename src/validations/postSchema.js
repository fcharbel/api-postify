const joi = require('joi')

const postSchema = joi.object({
    titulo: joi.string().required().min(5).messages({
        'any.required': 'O campo titulo é obrigatório',
        'string.empty': 'O campo titulo é obrigatório',
        'string.min': 'O campo titulo deve ter no mínimo 5 caracteres'
    }),
    texto: joi.string().required().min(10).messages({
        'any.required': 'O campo texto é obrigatório',
        'string.empty': 'O campo texto não pode estar vazio',
        'string.min': 'O campo texto deve ter no mínimo 10 caracteres'
    }),
    usuario_id: joi.number().integer().required().messages({
        "number.base": "O campo usuario_id deve ser um número",
        "any.required": "O campo usuario_id é obrigatório",
    }),
    tema_id: joi.number().integer().required().messages({
        "number.base": "O campo usuario_id deve ser um número",
        "any.required": "O campo usuario_id é obrigatório",
    })
});

module.exports = { postSchema };