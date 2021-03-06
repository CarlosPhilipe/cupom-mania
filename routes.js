const express	= require('express');

const estabelecimento = require('./controller/estabelecimento/');
// Acessível dentro da pasta controller
const cliente = require('./controller/cliente/');
// const usuario  		  = require('../api/controller/usuarios/');
const promocao = require('./controller/promocao/');
const cupom 		  = require('./controller/cupom/');

module.exports = function (server, connection) {

	connection.authenticate()
    .then(err => {
    	console.log('Conexão foi estabelecida com sucesso.');
  	})
    .catch(err => {
    	console.error('Não foi possível conectar ao banco de dados:', err);
    });

	// API Routes
	const router = express.Router()

	// estabelecimento
	server.post('/estabelecimento', estabelecimento.novo);
	server.post('/estabelecimento/login', estabelecimento.login);
	server.get('/estabelecimento', estabelecimento.buscarTodos);
	server.get('/estabelecimento/:id', estabelecimento.buscar);
	server.put('/estabelecimento/:id', estabelecimento.alterar);
	server.delete('/estabelecimento/:id', estabelecimento.excluir);

	// // cliente
	server.post('/:key/usuario', cliente.login);
	server.post('/:key/cliente', cliente.novo);
	server.get('/:key/cliente', cliente.buscarTodos);
	server.get('/:key/cliente/:id', cliente.buscar);
	server.put('/:key/cliente/:id', cliente.alterar);
	server.delete('/:key/cliente/:id', cliente.excluir);
	//
	//
	// // promocoes
	server.post('/:key/promocao', promocao.novo);
	server.get('/:key/promocao', promocao.buscarTodos);
	server.get('/:key/promocao/:id', promocao.buscar);
	server.put('/:key/promocao/:id', promocao.alterar);
	server.delete('/:key/promocao/:id', promocao.excluir);
	//
	// // promocoes
	server.post('/:key/cupom', cupom.novo);
	server.post('/:key/cupom/validar', cupom.validar);
	// server.get('/cupom', cupom.buscarTodos);
	// server.get('/cupom/:id', cupom.buscar);
	// server.get('/cupom/:id/cliente', cupom.buscarPorCliente);
	// server.get('/cupom/:id/promocao', cupom.buscarPorPromocao);
	// server.put('/cupom/:id', cupom.alterar);
	// server.delete('/cupom/:id', cupom.excluir);
	// server.post('/cupom/:id/usar', cupom.usar);

	server.use(function(req, res, next){
		res.status(404);
		res.send(`{"mensagem":"erro","tipo":"servico inexistente"}`);
	});

	// Rotas de cliente da API
	// const person = require('../api/person/personService')
	// person.register(router, '/person')

}
