// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
const Estabelecimento = require('../../model/Estabelecimento');
const Util = require('../../modules/Util');
// método chamado no post do cliente
module.exports = async function novo(req, res) {

    const idestabelecimento = await Estabelecimento.findOne({
      where: {
        chave: req.params.key
      }
    }).then(result => {
        return result.idestabelecimento;
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })

    Cupom.build({
      promocao_idpromocao: req.body.idpromocao,
      cliente_idcliente: req.body.idcliente,
      numero_cupom: req.body.numero_cupom,
      ativo: true,
     })
    .save()
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok", "result":${result.id}}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
