// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
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

    Cliente.build({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      ativo: true,
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
