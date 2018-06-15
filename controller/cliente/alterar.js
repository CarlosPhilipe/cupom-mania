// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
const Estabelecimento = require('../../model/Estabelecimento');
const Util = require('../../modules/Util');
// método chamado no update dados do cliente
module.exports = async function alterar(req, res) {

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
  console.log(idestabelecimento);

  Cliente.update({
      nome: req.body.nome,
      email: req.body.email,
      senha: req.body.senha,
      ativo: req.body.ativo,
    },{
      where: {
        idcliente: req.params.id,
        estabelecimento_idestabelecimento: idestabelecimento
      }
    }
  )
  .then(result => {
    // em caso de sucesso
    res.send(`{"mensagem":"ok"}`);
  })
  .catch(error => {
    // em caso de erro
    res.send(`{"mensagem":"erro","tipo":"${error}"}`);
  });

}
