// const { createCategory, getCategory, getAllCategories } = require('../services/category.service');
const { createPost } = require('../services/post.service');
const { getId } = require('./user.controller');

const insertPost = async (req, res, next) => {
  try {
    const { body } = req; 
    const userId = await getId(req);

    const post = await createPost(userId, body);

    return res.status(201).json(post);
  } catch (error) {
    next(error);
  }
};

module.exports = {
  insertPost,
};