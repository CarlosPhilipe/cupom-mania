const express	= require('express');

const estabelecimento = require('./controller/estabelecimento/');
// Acessível dentro da pasta controller
// const cliente = require('controller/cliente/');
// const usuario  		  = require('../api/controller/usuarios/');
// const promocao 		  = require('../api/controller/promocoes/');
// const cupom 		  = require('../api/controller/cupons/');

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
	// server.get('/estabelecimento', estabelecimento.buscarTodos);
	// server.get('/estabelecimento/:id', estabelecimento.buscar);
	// server.put('/estabelecimento/:id', estabelecimento.alterar);
	// server.delete('/estabelecimento/:id', estabelecimento.excluir);

	//Utilizado para validação
	// server.use('/api', auth.passport.authenticate('jwt', { session: false }), router);

	// server.get('/:key/teste/zonadetestes/:codigo', teste.zonadetestes);

	// usuarios
	// server.post('/usuario', usuario.novo);
	// server.get('/usuario', usuario.buscarTodos);
	// server.get('/usuario/:id', usuario.buscar);
	// server.put('/usuario/:id', usuario.alterar);
	// server.delete('/api/usuario/:id', usuario.excluir);
  // server.post('/login', usuario.login);

	// // cliente
	// server.post('/:key/cliente', cliente.novo);
	// server.get('/:key/cliente', cliente.buscarTodos);
	// server.get('/:key/cliente/:id', cliente.buscar);
	// server.put('/:key/cliente/:id', cliente.alterar);
	// server.delete('/:key/cliente/:id', cliente.excluir);
	//
	//
	// // promocoes
	// server.post('/promocao', promocao.novo);
	// server.get('/promocao', promocao.buscarTodos);
	// server.get('/promocao/:id', promocao.buscar);
	// server.put('/promocao/:id', promocao.alterar);
	// server.delete('/promocao/:id', promocao.excluir);
	//
	// // promocoes
	// server.post('/cupom', cupom.novo);
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
