// CHAMADA ao mecanismo de conexão
const Cliente = require('../../model/Cliente');
// método chamado do get com patrametro
module.exports = function buscar(req, res) {

        Cliente.findOne({
          where: {
            idcliente: req.params.id
          }
        }).then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send(`{"mensagem":"erro","tipo":"${error}"}`);
        })
}
