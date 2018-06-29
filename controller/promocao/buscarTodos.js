// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
const Promocao = require('../../model/Promocao');
// método chamado no get de todos os clientes
module.exports = async function buscarTodos(req, res) {

  const idestabelecimento = await Estabelecimento.findOne({
    where: {
      chave: req.params.key
    }
  })
  .then(result => {
      return result.idestabelecimento;
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });

  Promocao.findAll({
    order: [
      ['idpromocao', 'DESC'],
    ],
    where: {
      deletado: null,
      estabelecimento_idestabelecimento: idestabelecimento
    }
  })
  .then(result => {
      res.send(result);
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });
}
