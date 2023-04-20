const { postInputs } = require('../schemas/postInputs.schema');
const { getAllCategories } = require('../services/category.service');
const { throwError } = require('../utils/throwError');

const validatePost = async (req, res, next) => {
  try {
    const { title, content, categoryIds } = req.body;

    const { error } = postInputs.validate({ title, content, categoryIds });
    if (error) { throwError(error.message, 400); }

    const categories = await getAllCategories();
    const ids = categories.map((c) => c.dataValues.id);
    const result = categoryIds.every((c) => ids.includes(c));
   
    if (!result) {
      throwError('one or more "categoryIds" not found', 400);
    }
    next();    
  } catch (error) {
    next(error);
  }
};

module.exports = {
  validatePost,
};