const { userInputs } = require('../schemas/userInputs.schema');

const validateInputs = async (req, res, next) => {
  try {
    const { body } = req;
    const { error } = userInputs.validate(body);

    if (error) {
      throw Object.assign(
        new Error(error.message), 
        { status: 400 },
      );
    }
    next();    
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateInputs,
};