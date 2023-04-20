const { Op } = require('sequelize');
const { User } = require('../models');

const checkUser = async (email) => {
  const response = await User.findOne({ where: { email }, 
    attributes: ['id', 'displayName', 'email'] });
  return response;
};

// const getUser = async (email) => {
//   const response = await User.findOne({
//     where: {
//      email 
//     },
//   });
//   return response;
// };
const getUser = async (email, password) => {
  const response = await User.findOne({
    where: {
      [Op.and]: [{ email }, { password }],
    },
  });
  return response;
};

const getAllUsers = async () => {
  const response = await User.findAll({
    attributes: ['displayName', 'email', 'image'],
  });

  return response;
};

const getUserById = async (id) => {
  const response = await User.findByPk(id, {
    attributes: ['id', 'displayName', 'email', 'image'],
  });

  return response;
};

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
};

const deleteUser = async (id) => {
  await User.destroy({ where: { id } });
};

module.exports = {
  checkUser,
  getUser,
  getAllUsers,
  createUser,
  getUserById,
  deleteUser,
};
