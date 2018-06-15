// agrupa todas todos os recursos num único canto para a chamada
const promocao = [];
promocao.novo          = require("./novo.js");       // POST
promocao.buscarTodos   = require("./buscarTodos.js");// GET
promocao.buscar        = require("./buscar.js");     // GET CIM ID
promocao.alterar       = require("./alterar.js");    // PUT
promocao.excluir       = require("./excluir.js");    // DELETE
// retorna as funções
module.exports = promocao; // retorna um objeto com os recursos
