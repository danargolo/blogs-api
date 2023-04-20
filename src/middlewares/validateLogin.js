const { throwError } = require('../utils/throwError');

const validateFields = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) { 
      throwError('Some required fields are missing', 400);
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateFields;