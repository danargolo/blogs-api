const { verifyToken } = require('../utils/auth');

const validateToken = async (req, res, next) => {
  const { authorization } = req.headers;
  const response = verifyToken(authorization);
  // console.log(response.email);

  if(!response.email) {
    return res.status(401).json({message: 'Expired or invalid token' })
  }
  next();
}

module.exports = {
  validateToken
}