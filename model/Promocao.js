// CHAMADA ao mecanismo de conexão
const { connection, Sequelize } = require('../modules/database');
//Model da classe promocao
const Promocao = connection.define('promocao', {
    idpromocao: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    titulo: {
      type: Sequelize.STRING(70)
    },
    regulamento: {
      type: Sequelize.TEXT
    },
    imagem_campanha: {
      type: Sequelize.STRING(70)
    },
    validade: {
      type: Sequelize.DATE
    },
    valor: {
      type: Sequelize.DOUBLE
    },
    quantidade: {
      type: Sequelize.INTEGER
    },
    estabelecimento_idestabelecimento: {
      type: Sequelize.INTEGER
    },
    ativo: {
      type: Sequelize.BOOLEAN
    }
  },{
    timestamps: false
  }
);

module.exports = Promocao;
