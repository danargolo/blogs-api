const { Op } = require('sequelize');
const { User } = require('../models');

// const getUser = async (email, password) => {
//   console.log('teste');
//   const data = await User.findOne({ where: { email } });
//   console.log(data);
  
//   return data;
// }
const getUser = async (email, password) => {
  const data = await User.findOne({
    where: {
      [Op.and]: [{ email }, { password }],
    },
  });
  return data;
};

module.exports = {
  getUser, 
};
