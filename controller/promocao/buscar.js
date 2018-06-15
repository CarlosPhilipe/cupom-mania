// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
const Promocao = require('../../model/Promocao');
// método chamado do get com patrametro
module.exports = async function buscar(req, res) {

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

  Promocao.findOne({
    where: {
      idpromocao: req.params.id,
      estabelecimento_idestabelecimento: idestabelecimento
    }
  }).then(result => {
      res.send(result);
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });
}
