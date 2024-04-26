const express = require('express');
const { createUser, userAlreadyExists } = require('../../infrastructure/repositories/user-repository/user-registration-repository');
const userCreateInterface = express.Router();
const validateFieldsCreateUser = require('../../controllers/user-controller/create-user-verify-input');

userCreateInterface.post('/api/user', async (request, response) => {
  const fieldsIsValid = validateFieldsCreateUser(request, response);

  if (fieldsIsValid != true) return fieldsIsValid;

  const userExists = await userAlreadyExists(request, response);

  if (userExists == true) return response.status(400).json({ message: "E-mail já cadastrado no sistema!" }).send();

  const userCreated = await createUser(request, response);

  return response.status(userCreated.statusCode).json(userCreated).send();
})

module.exports = userCreateInterface;