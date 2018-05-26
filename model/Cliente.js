// CHAMADA ao mecanismo de conexão
const { connection, Sequelize } = require('../database');
//Model da classe cliente
const Cliente = connection.define('clientes', {
  nome: {
    type: Sequelize.STRING(70)
  },
  email: {
    type: Sequelize.STRING(70),
    validate:{
      isEmail: true
    }
  },
  senha: {
    type: Sequelize.STRING(45)
  },
);

module.exports = Cliente;
