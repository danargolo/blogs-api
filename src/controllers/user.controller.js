const { 
  getUser, 
  getAllUsers, 
  checkUser, 
  createUser,
  getUserById } = require('../services/user.service');
const { generateToken } = require('../utils/auth');
const { throwError } = require('../utils/throwError');

const getLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const data = await getUser(email, password);
  
    if (!data) { throwError('Invalid fields', 400); }

    const token = generateToken(email);
    return res.status(200).json({ token });
  } catch (error) {
    next(error);
  }
};

const insertUser = async (req, res, next) => {
  try {
    const { body } = req;

    if (await checkUser(body.email) !== 0) { 
      throwError('User already registered', 409);
    }
    await createUser(body);
    
    const token = generateToken(body.email);
    return res.status(201).json({ token });
  } catch (error) {
    next(error);
  }
};

const selectUsers = async (req, res, next) => {
  try {
    const data = await getAllUsers();

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

const selectUserById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const data = await getUserById(id);

    if (!data) { throwError('User does not exist', 404); }

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  getLogin,
  insertUser,
  selectUsers,
  selectUserById,
};