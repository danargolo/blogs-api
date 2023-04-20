/**
 * 
 * @param {import('sequelize').Sequelize } sequelize 
 * @param {import('sequelize').DataTypes} DataTypes  
 */
module.exports = (sequelize, DataTypes) => {
  const UsersTable = sequelize.define('User', {
    id: { type: DataTypes.INTEGER, primaryKey: true, autoIncrement: true },
    displayName: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    image: DataTypes.STRING,
  }, {
    tableName: 'users',
    underscored: true,
    timestamps: false,
  })

  UsersTable.associate = ({BlogPost}) => {
    UsersTable.hasMany(BlogPost, {
      foreignKey: 'userId',
      as: 'blogPosts'
    })
  }
  return UsersTable;
};