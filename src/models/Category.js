module.exports = (sequelize, DataTypes) => {
  const CategoriesTables = sequelize.define('Category', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    name: DataTypes.STRING
  }, {
    tableName: 'categories',
    underscored: true,
    timestamps: false,
  })
  
  return CategoriesTables;
};