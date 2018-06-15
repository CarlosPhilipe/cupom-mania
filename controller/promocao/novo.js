// CHAMADA ao mecanismo de conexão
const Promocao = require('../../model/Promocao');
const Estabelecimento = require('../../model/Estabelecimento');
const Util = require('../../modules/Util');
// método chamado no post do cliente
module.exports = async function novo(req, res) {

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

    Promocao.build({
      titulo: req.body.titulo,
      regulamento: req.body.regulamento,
      validade: req.body.validade,
      valor: req.body.valor,
      quantidade: req.body.quantidade,
      imagem_campanha: req.body.imagem_campanha,
      estabelecimento_idestabelecimento: idestabelecimento
     })
    .save()
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
