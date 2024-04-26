const httpStatusResponse = require('../../../commons/http-response/http-status-response');
const User = require('../../database/model/user-model/user-registration-model');
const generateId = require('../../../commons/generate-uid/generate-uuid-v4');

const authenticateUser = async (request, response) => {
  try {
    const { email, password } = request.body;

    const isUser = await User.findOne({
      where: {
        email: email
      }
    })

    if (!await User.prototype.validPassword(password, isUser.password)) return httpStatusResponse(400, ("Senha incorreta!"), "User repository");

    return isUser.is_fundamental_two;

  } catch (error) {
    const finalError = httpStatusResponse(400, ("E-mail e/ou senha incorretos!"), "User repository");
    return finalError;
  }
}

const createUser = async (request, response) => {
  try {
    const { email, password, schooling } = request.body;

    const isFundamentalTwo = schooling == 2 ? true : false;

    const userCreated = await User.create({
      id: generateId(),
      email: email,
      password: password,
      schooling: schooling,
      is_fundamental_two: isFundamentalTwo
    });

    return httpStatusResponse(201, (userCreated));
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User repository");
    return finalError;
  }
}

const userAlreadyExists = async (request, response) => {
  try {
    const { email } = request.body;

    const isUser = await User.findOne({
      where: {
        email: email
      }
    })

    if (!isUser) return httpStatusResponse(400, "Email incorreto", "User repository");

    return true;

  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User repository");
    return finalError;
  }
}


module.exports = { createUser, authenticateUser, userAlreadyExists };