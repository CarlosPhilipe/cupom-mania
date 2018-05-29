// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado no update dados do cliente
module.exports = function alterar(req, res) {
  Cliente.update({
    nome: req.body.nome,
    email: req.body.email,
    senha: req.body.senha,
    ativo: true,
    estabelecimento_idestabelecimento: req.body.idestabelecimento
  },{
    where: {
      idcliente: req.params.id
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
