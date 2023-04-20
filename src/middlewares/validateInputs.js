const { userInputs } = require('../schemas/userInputs.schema');
const { throwError } = require('../utils/throwError');

const validateInputs = async (req, res, next) => {
  try {
    const { body } = req;
    const { error } = userInputs.validate(body);

    if (error) { throwError(error.message, 400); }
    next();    
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateInputs,
};