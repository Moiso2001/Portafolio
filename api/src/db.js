const { Sequelize, Op } = require('sequelize');
const fs = require('fs');
const path = require('path');

const {DB_USER, DB_PASSWORD, DB_HOST, DB_NAME} = process.env;

const sequelize = new Sequelize(`postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}:5042/${DB_NAME}`, {
    logging: false, // set to console.log to see the raw SQL queries
    native: false, // lets Sequelize know we can use pg-native for ~30% more speed
    // Para DB deploy. Suelen pedir conexión ssl.
    // dialectOptions: {
    //   ssl: true
    // },
    define: {
    freezeTableName: true // Para que no le cambie el nombre a todas las tablas
  }
})

module.exports = {
  ...sequelize.models, // para poder importar los modelos así: const { Product, User } = require('./db.js');
  conn: sequelize, // para importart la conexión { conn } = require('./db.js');
  Op
};