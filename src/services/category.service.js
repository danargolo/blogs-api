const { Category } = require('../models');

const createCategory = async (name) => {
  await Category.create({ name });
};

const getCategory = async (name) => {
  const response = await Category.findOne({
    where: {
      name,
    },
  });
  return response;
};

const getAllCategories = async () => {
  const response = await Category.findAll({
    attributes: ['id', 'name'],
  });

  return response;
};

module.exports = {
  createCategory,
  getCategory,
  getAllCategories,
};
