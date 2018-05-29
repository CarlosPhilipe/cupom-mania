// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
const Util = require('../../modules/Util');
// método chamado no post do cliente
// /estabelecimento
module.exports = function novo(req, res) {
    var key = Util().buildKeyFromName();

    Estabelecimento.build({
      chave: key,
      nome: req.body.nome,
      logo: req.body.logo,
      cep: req.body.cep,
      bairro: req.body.bairro,
      rua: req.body.rua,
      numero: req.body.numero,
      complemento: req.body.complemento,
      email: req.body.email,
      senha: req.body.senha,
      ativo: true
     })
    .save()
    .then(result => {
      // em caso de sucesso
      res.send(`{"mensagem":"ok","key":"${key}"}`);
    })
    .catch(error => {
      // em caso de erro
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })
}
