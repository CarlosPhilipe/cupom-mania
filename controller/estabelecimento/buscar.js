// CHAMADA ao mecanismo de conexão
const Estabelecimento = require('../../model/Estabelecimento');
// método chamado do get com patrametro
// /estabelecimento/:id
module.exports = function buscar(req, res) {
        Estabelecimento.findOne({
          where: {
            id: req.params.id
          }
        }).then(result => {
            res.send(result);
        })
        .catch(error => {
            res.send(`{"mensagem":"erro","tipo":"${error}"}`);
        })
}
