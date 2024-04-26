const { uuid } = require('uuidv4');

const generateId = () => {
  return uuid();
}

module.exports = generateId;