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

module.exports = {
  generateToken,
};
