const { BlogPost, PostCategory } = require('../models');

const createAssociations = async (postId, categoryIds) => {
  const datas = categoryIds.map((c) => ({ postId, categoryId: c }));
  await PostCategory.bulkCreate(datas);
};

const createPost = async (userId, body) => {
  try {
  const { title, content, categoryIds } = body;

  const response = await BlogPost.create({ title, content, userId });
  const postId = response.dataValues.id;

  await createAssociations(postId, categoryIds);

  return response;
  } catch (error) {
    return error;
  }
};

module.exports = {
  createPost,
};
