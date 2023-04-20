const { Op } = require('sequelize');
const { User } = require('../models');

const checkUser = async (email) => {
  const data = await User.count({ where: { email } });
  return data;
};

const getUser = async (email, password) => {
  const data = await User.findOne({
    where: {
      [Op.and]: [{ email }, { password }],
    },
  });
  return data;
};

const createUser = async ({ displayName, email, password, image }) => {
  await User.create({ displayName, email, password, image });
};

module.exports = {
  checkUser,
  getUser,
  createUser,
};
