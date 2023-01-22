const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('link', {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        url: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        what: {
          type: DataTypes.TEXT,
          allowNull: false,
        }
    },{
      timestamps: false
    })
}