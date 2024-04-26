const Joi = require('joi');

const loginUserFields = Joi.object().keys({
  email: Joi.string().lowercase().email({ tlds: { allow: false } }).required().messages({
    'string.base': `O "e-mail" deve ser caracteres textuais`,
    'string.empty': `O "e-mail" não pode ser vazio`,
    'any.required': `O "e-mail" é obrigatório`,
    'string.email': 'O "e-mail" deve ser um e-mail válido',
  }),
  password: Joi.string().min(6).max(13).required().messages({
    'string.base': `A "senha" deve ser caracteres`,
    'string.empty': `A "senha" não pode ser vazia`,
    'string.min': `A "senha" deve ter no mínimo {#limit} caracteres`,
    'any.required': `A "senha" é obrigatório`
  }),
}).required()

const validateFieldsLoginUser = (request, response) => {
  const validation = loginUserFields.validate(request.body);

  const { error } = validation;
  if (error) {
    return response.status(422).json({
      message: error.details[0].message,
      data: {
        message: validation.value,
      }
    });
  }
  return true;
}

module.exports = validateFieldsLoginUser;