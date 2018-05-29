// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado no get de todos os clientes
module.exports = function buscarTodos(req, res) {
    Cliente.findAll({
      where: {
        idestabelecimento: 1
      }
    }).then(result => {
        res.send(result);
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    });
}
