const jwt = require('jsonwebtoken');

const { JWT_SECRET } = process.env;

const configJWT = {
  expiresIn: '2d',
  algorithm: 'HS256',
};

const generateToken = (data) => {
  const token = jwt.sign({ email: data }, JWT_SECRET, configJWT);

  return token;
};

const verifyToken = (token) => {
  if (!token) {
    throw Object.assign(
      new Error('Token not found'), 
      { status: 401 },
    );
  }
  try {
    const isValid = jwt.verify(token, JWT_SECRET);
    return isValid;
  } catch (error) {
    return error;
  }
};

module.exports = {
  generateToken,
  verifyToken,
};
