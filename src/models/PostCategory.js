/**
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes  
 */
module.exports = (sequelize, DataTypes) => {
  const PostCategoriesTable = sequelize.define('PostCategory', {
    postId: DataTypes.INTEGER,
    categoryId: DataTypes.INTEGER
  }, {
    tableName: 'posts_categories',
    underscored: true,
    timestamps: false,
  })

  PostCategoriesTable.associate = ({Category, BlogPost}) => {
    Category.belongsToMany(BlogPost, {
      as: 'blog_posts',
      through: PostCategoriesTable,
      foreignKey: 'categoryId',
      otherKey: 'postId'
    })

    BlogPost.belongsToMany(Category, {
      as: 'categories',
      through: PostCategoriesTable,
      foreignKey: 'postId',
      otherKey: 'categoryId'
    })
  }

  return PostCategoriesTable;
};