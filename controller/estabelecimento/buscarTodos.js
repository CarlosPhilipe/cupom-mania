// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado no get de todos os clientes
// /estabelecimento
module.exports = function buscarTodos(req, res) {
    Estabelecimento.findAll({

    }).then(result => {
        res.send(result);
    })
    .catch(error => {
        res.send(`{"mensagem":"erro","tipo":"${error}"}`);
    })

}
