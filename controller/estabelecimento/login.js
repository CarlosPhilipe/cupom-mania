// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado do get com patrametro
module.exports = async function buscar(req, res) {

console.log('aqui');
  const idestabelecimento = await Estabelecimento.findOne({
    where: {
      email: req.body.email,
      senha: req.body.senha,
    }
  }).then(result => {
      res.send(result);
  })
  .catch(error => {
      res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });
}
