// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método usado no delete de todos os clientes
// /estabelecimento/:id
module.exports = function excluir(req, res) {
  Estabelecimento.update({
    est_ativo : false,
  },{
    where: {
      id: req.params.id
    }
  }
).then(result => {
  res.send(`{"mensagem":"ok"}`);
})
.catch(error => {
  // em caso de erro
  res.send(`{"mensagem":"erro","tipo":"${error}"}`);
})
}
