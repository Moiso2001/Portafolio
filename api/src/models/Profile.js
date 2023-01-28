const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    sequelize.define('profile', {
        id:{
          type: DataTypes.INTEGER,
          autoIncrement: true,
          primaryKey: true
        },
        name: {
          type: DataTypes.STRING,
          allowNull: false
        },
        age: {
          type: DataTypes.INTEGER,
          allowNull: false,
          defaultValue: 21
        },
        location: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: 'Bogota D.C Colombia'
        },
        email: {
          type: DataTypes.TEXT,
          allowNull: false,
          defaultValue: 'moises.platadev@gmail.com'
        },
        title: {
          type: DataTypes.STRING,
          allowNull: false,
        }
    },{
      timestamps: false
    })
}