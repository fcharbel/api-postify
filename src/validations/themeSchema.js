const joi = require('joi')

const themeSchema = joi.object({
    descricao: joi.string().required().min(3).messages({
        'any.required': 'O campo descricao é obrigatório',
        'string.empty': 'O campo descricao é obrigatório',
        'string.min': 'O campo descricao deve ter no mínimo 3 caracteres'
    })
});

module.exports = { themeSchema };