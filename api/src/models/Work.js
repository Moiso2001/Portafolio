const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('work', {
        id:{
          type: DataTypes.INTEGER,
          // autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        status: {
          type: DataTypes.ENUM('finished', 'creating', 'in mind', 'being made'),
          allowNull: false,
        },
        text: {
          type: DataTypes.TEXT,
          allowNull: false
        }
    })
}