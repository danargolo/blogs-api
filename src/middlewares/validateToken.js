const { verifyToken } = require('../utils/auth');
const { throwError } = require('../utils/throwError');

const validateToken = async (req, _res, next) => {
  const { authorization } = req.headers;
  try {
    if (!authorization) { throwError('Token not found', 401); }
    const response = verifyToken(authorization);
    if (!response.email) { throwError('Expired or invalid token', 401); }
    next();
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validateToken,
};