// agrupa todas todos os recursos num único canto para a chamada
const cupom = [];
cupom.novo = require("./novo.js");       // POST
// cliente.buscarTodos   = require("./buscarTodos.js");// GET
// cliente.buscar        = require("./buscar.js");     // GET CIM ID
cupom.validar        = require("./validar.js");     // GET CIM ID
// cliente.alterar       = require("./alterar.js");    // PUT
// cliente.excluir       = require("./excluir.js");    // DELETE
// // retorna as funções
module.exports = cupom; // retorna um objeto com os recursos
