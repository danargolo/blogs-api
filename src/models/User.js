/**
 * 
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes  
 */
module.exports = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('User', {
    id: DataTypes.INTEGER,
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true
  })
  return UsersTable;
};