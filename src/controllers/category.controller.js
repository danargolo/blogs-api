const { createCategory, getCategory, getAllCategories } = require('../services/category.service');

const { throwError } = require('../utils/throwError');

const insertCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) { throwError('"name" is required', 400); }

    await createCategory(name);

    const data = await getCategory(name);
  
    return res.status(201).json(data);
  } catch (error) {
    next(error);
  }
};

// const insertUser = async (req, res, next) => {
//   try {
//     const { body } = req;

//     if (await checkUser(body.email) !== 0) { 
//       throwError('User already registered', 409);
//     }
//     await createUser(body);
    
//     const token = generateToken(body.email);
//     return res.status(201).json({ token });
//   } catch (error) {
//     next(error);
//   }
// };

const selectCategories = async (req, res, next) => {
  try {
    const data = await getAllCategories();

    return res.status(200).json(data);
  } catch (error) {
    next(error);
  }
};

// const selectUserById = async (req, res, next) => {
//   try {
//     const { id } = req.params;
//     const data = await getUserById(id);

//     if (!data) { throwError('User does not exist', 404); }

//     return res.status(200).json(data);
//   } catch (error) {
//     next(error);
//   }
// };

module.exports = {
  insertCategory,
  selectCategories,
};