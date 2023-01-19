const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('love', {
        id:{
          type: DataTypes.INTEGER,
          // autoIncrement: true,
          primaryKey: true
        },
        what: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        why: {
          type: DataTypes.TEXT,
          allowNull: false,
        }
    })
}