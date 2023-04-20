const { Op } = require('sequelize');
const { User } = require('../models');

const checkUser = async (email) => {
  const response = await User.count({ where: { email } });
  return response;
};

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

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
};

module.exports = {
  checkUser,
  getUser,
  getAllUsers,
  createUser,
};
