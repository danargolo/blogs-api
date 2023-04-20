const { getUser, checkUser, createUser } = require('../services/user.service');
const { generateToken } = require('../utils/auth');

const getLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await getUser(email, password);
  
    if (!data) {
      throw Object.assign(
        new Error('Invalid fields'), 
        { status: 400 },
      );
    }

    const token = generateToken(email);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const insertUser = async (req, res, next) => {
  try {
    const { body } = req;
    console.log(body.email);

    if (await checkUser(body.email) !== 0) {
      throw Object.assign(
        new Error('User already registered'), 
        { status: 409 },
      );
    }
    await createUser(body);
    
    const token = generateToken(body.email);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLogin,
  insertUser,
};