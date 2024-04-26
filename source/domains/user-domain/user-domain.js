const httpStatusResponse = require('../../commons/http-response/http-status-response');

const isFundamentalTwo = (schooling) => {
  try {
    if (schooling >= 1 && schooling <= 5) {
      return false;
    }
    return true;
  } catch (error) {
    const finalError = httpStatusResponse(400, (error.message), "User domain");
    return finalError;
  }
}

module.exports = { isFundamentalTwo };