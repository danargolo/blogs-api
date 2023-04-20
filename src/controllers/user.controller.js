const { verifyToken } = require('../utils/auth');

const { 
  getUser, 
  getAllUsers, 
  checkUser, 
  createUser,
  getUserById, 
  deleteUser } = require('../services/user.service');
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
    const data = await checkUser(body.email);

    if (data) { 
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

const getId = async (req) => {
  const { authorization } = req.headers;
  const response = verifyToken(authorization);

  const data = await checkUser(response.email);
  return data.dataValues.id;
};

const destroyUser = async (req, res, _next) => {
  const userId = await getId(req);
  await deleteUser(userId);

  return res.status(204).json();
};

module.exports = {
  getLogin,
  insertUser,
  selectUsers,
  selectUserById,
  getId,
  destroyUser,
};