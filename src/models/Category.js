module.exports = (sequelize, DataTypes) => {
  const CategoriesTables = sequelize.define('Category', {
    id: DataTypes.INTEGER,
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    underscored: true
  })
  
  return CategoriesTables;
};