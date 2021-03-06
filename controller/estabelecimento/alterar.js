// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado no update dados do cliente
module.exports = function alterar(req, res) {
  Estabelecimento.update({
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
  },{
    where: {
      idestabelecimento: req.params.id
    }
  }
).then(result => {
  // em caso de sucesso
  res.send(`{"mensagem":"ok"}`);
})
.catch(error => {
  // em caso de erro
  res.send(`{"mensagem":"erro","tipo":"${error}"}`);
})

}
