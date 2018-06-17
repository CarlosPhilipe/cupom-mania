// CHAMADA ao mecanismo de conexão
const {connection, Sequelize} = require('../modules/database');
//Model da classe Estabelecimento
const Cupom = connection.define('cupom', {
    idcupom: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    promocao_idpromocao: {
      type: Sequelize.INTEGER
    },
    cliente_idcliente: {
      type: Sequelize.INTEGER
    },
    numero_cupom: {
      type: Sequelize.STRING(8)
    },
    ativo: {
      type: Sequelize.BOOLEAN
    }
},{
  timestamps: false
});

module.exports = Cupom;
