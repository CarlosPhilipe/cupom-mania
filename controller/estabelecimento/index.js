// agrupa todas todos os recursos num único canto para a chamada
const estabelecimento = [];
estabelecimento.novo          = require("./novo.js");       // POST
estabelecimento.buscarTodos   = require("./buscarTodos.js");// GET
estabelecimento.buscar        = require("./buscar.js");     // GET CIM ID
estabelecimento.alterar       = require("./alterar.js");    // PUT
estabelecimento.excluir       = require("./excluir.js");    // DELETE
// retorna as funções
module.exports = estabelecimento; // retorna um objeto com os recursos
