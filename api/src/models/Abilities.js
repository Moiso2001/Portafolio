const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('abilities', {
        id:{
          type: DataTypes.INTEGER,
          // autoIncrement: true,
          primaryKey: true
        },
        technology: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        since: {
          type: DataTypes.TEXT,
          allowNull: false,
        }
    })
}