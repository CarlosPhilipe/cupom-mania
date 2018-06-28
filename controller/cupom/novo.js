// CHAMADA ao mecanismo de conexão
const Cupom = require('../../model/Cupom');
const Estabelecimento = require('../../model/Estabelecimento');
const Util = require('../../modules/Util');
const uuidv1 = require('uuid/v1');
// método chamado no post do cliente
module.exports = async function novo(req, res) {

    const uuid = uuidv1().split("-")[0];
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
      numero_cupom: uuid,
      ativo: true,
     })
    .save()
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok", "result":"${uuid}"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
