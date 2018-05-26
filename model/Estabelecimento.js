// CHAMADA ao mecanismo de conexão
const {connection, Sequelize} = require('../modules/database');
//Model da classe Estabelecimento
const Estabelecimento = connection.define('estabelecimento', {
    idestabelecimento: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    nome: {
      type: Sequelize.STRING(45)
    },
    chave: {
      type: Sequelize.STRING(45)
    },
    cep: {
      type: Sequelize.STRING(8)
    },
    bairro: {
      type: Sequelize.STRING(45)
    },
    rua: {
      type: Sequelize.STRING(70)
    },
    numero: {
      type: Sequelize.STRING(7)
    },
    logo: {
      type: Sequelize.STRING(45)
    }
},{
  timestamps: false
});

module.exports = Estabelecimento;
