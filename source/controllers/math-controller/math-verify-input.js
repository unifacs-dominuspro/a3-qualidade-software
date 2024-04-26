const Joi = require('joi');

const performsOperation = Joi.object().keys({
  numbers: Joi.array().items(Joi.string().regex(/(\d?[+*/%√.-])/).messages(
    {
      "string.pattern.base": "Os valores só podem ser números com operações matemáticas"
    }
  ))
}).required().messages({
  'string.base': `Os valores devem ser do tipo número`,
  'string.empty': `Os valores não podem ser vazio`,
  'any.required': `Os valores são obrigatórios`
})

const validateFieldNumberForBasicOperations = (request, response) => {
  const validation = performsOperation.validate(request.body);

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

module.exports = validateFieldNumberForBasicOperations;