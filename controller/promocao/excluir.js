// CHAMADA ao mecanismo de conexão
const Promocao = require('../../model/Promocao');
const Estabelecimento = require('../../model/Estabelecimento');
const Util = require('../../modules/Util');
// método usado no delete de todos os clientes
// /estabelecimento/:id
module.exports = async function excluir(req, res) {

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

  Promocao.update({
      ativo: false,
    },{
      where: {
        idpromocao: req.params.id,
        estabelecimento_idestabelecimento: idestabelecimento
      }
    }
  )
  .then(result => {
    // em caso de sucesso
    res.send(`{"mensagem":"ok"}`);
  })
  .catch(error => {
    // em caso de erro
    res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });
}
