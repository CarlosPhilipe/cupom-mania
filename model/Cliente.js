// CHAMADA ao mecanismo de conexão
const { connection, Sequelize } = require('../modules/database');
//Model da classe cliente
const Cliente = connection.define('cliente', {
  idcliente: {
      type: Sequelize.INTEGER,
      primaryKey: true
  },
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
  estabelecimento_idestabelecimento: {
    type: Sequelize.INTEGER
  },
  ativo: {
      type: Sequelize.BOOLEAN
  }
},{
  timestamps: false
});

module.exports = Cliente;
