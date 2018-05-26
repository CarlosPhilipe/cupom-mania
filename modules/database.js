const Sequelize = require('sequelize');
// coloque o nome da base / usuário/ senha da sua máquina
const connection = new Sequelize('cupom_mania', 'root', '//C@rlos1//', {
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    idle: 10000
  },
  logging: false,
  define: {
    //prevent sequelize from pluralizing table names
    freezeTableName: true
  }

});

module.exports = {Sequelize, connection};
