/**@param {import('sequelize').DataTypes} DataTypes */

module.exports = (sequelize, DataTypes) => {
  const BlogPostsTable = sequelize.define('BlogPost', {
    id: DataTypes.INTEGER,
    title: DataTypes.STRING,
    content: DataTypes.STRING,
    userId: DataTypes.INTEGER,
    published: DataTypes.DATE,
    updated: DataTypes.DATE
  }, {
    tableName: 'blog_posts',
    underscored: true
  })

  return BlogPostsTable;
};