const Joi = require('joi');

const createUserFields = Joi.object().keys({
  email: Joi.string().lowercase().email({ tlds: { allow: false } }).required().messages({
    'string.base': `O "e-mail" deve ser caracteres textuais`,
    'string.empty': `O "e-mail" não pode ser vazio`,
    'any.required': `O "e-mail" é obrigatório`,
    'string.email': 'O "e-mail" deve ser um e-mail válido',
  }),
  password: Joi.string().min(6).max(13).required().messages({
    'string.base': `A "senha" deve ser caracteres textuais`,
    'string.empty': `A "senha" não pode ser vazio`,
    'string.min': `A "senha" deve ter no mínimo {#limit} caracteres`,
    'any.required': `A "senha" é obrigatório`
  }),
  schooling: Joi.number().required().messages({
    'string.base': `A "escolaridade" deve ser do tipo 'numeral'`,
    'string.empty': `A "escolaridade" não pode ser um campo vazio`,
    'any.required': `A "escolaridade" é um campo obrigatório`
  }),
}).required()

const validateFieldsCreateUser = (request, response) => {
  const validation = createUserFields.validate(request.body);

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

module.exports = validateFieldsCreateUser;