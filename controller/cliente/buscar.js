// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado do get com patrametro
module.exports = async function buscar(req, res) {

  const idestabelecimento = await Estabelecimento.findOne({
    where: {
      chave: req.params.key
    }
  }).then(result => {
      return result.idestabelecimento;
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });

  Cliente.findOne({
    where: {
      idcliente: req.params.id,
      estabelecimento_idestabelecimento: idestabelecimento
    }
  }).then(result => {
      res.send(result);
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });
}
