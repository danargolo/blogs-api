const validateFields = (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      throw Object.assign(
        new Error('Some required fields are missing'), 
        { status: 400 },
      );
    }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = validateFields;