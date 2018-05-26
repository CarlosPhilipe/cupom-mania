const port = 3003

const bodyParser = require('body-parser')
const express = require('express')
const server = express()
// const md5 = require('md5');

server.use(bodyParser.urlencoded({ extended: true }))
server.use(bodyParser.json())

server.listen(port, function() {
	console.log(`Oi, o BACKEND está rodando na porta ${port}.`);
})

module.exports = server
