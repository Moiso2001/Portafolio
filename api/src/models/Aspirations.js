const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('aspirations', {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        what: {
          type: DataTypes.TEXT,
          allowNull: false
        },
        how: {
          type: DataTypes.TEXT,
          allowNull: false,
        },
        why: {
          type: DataTypes.TEXT,
          allowNull: false
        }
    },{
      timestamps: false
    })
}