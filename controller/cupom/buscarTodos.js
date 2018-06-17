// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado no get de todos os clientes
module.exports = async function buscarTodos(req, res) {

  const idestabelecimento = await Estabelecimento.findOne({
    where: {
      chave: req.params.key,
    }
  }).then(result => {
      return result.idestabelecimento;
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });

  Cliente.findAll({
    where: {
      ativo: true,
      estabelecimento_idestabelecimento: idestabelecimento
    }
  }).then(result => {
      res.send(result);
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });
}
