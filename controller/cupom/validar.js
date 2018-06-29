// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
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

  const idcupom = await Cupom.findOne({
    where: {
      numero_cupom: req.body.numero_cupom
    }
  }).then(result => {
      if (! result) {
          res.send(`{"mensagem":"cupom não encontrado","tipo":"cupom_nao_encontrado"}`);
      }
      return result.idcupom;
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });

  Cupom.update({
      ativo: false,
    },{
      where: {
        ativo: true,
        idcupom: idcupom
      }
    }
  )
  .then(result => {
    if (! result) {
        res.send(`{"mensagem":"cupom já utilizado","tipo":"cupom_ja_utilizado"}`);
    }
    res.send(`{"mensagem":"ok"}`);
  })
  .catch(error => {
    // em caso de erro
    res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });
}
