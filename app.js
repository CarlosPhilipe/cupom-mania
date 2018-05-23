// const express = require('express');
// const app = express();
// const router = express.Router();
// //Rotas
// const bd = require('./bin/db-config.js');
// const index = require('./routes/index');
// const personRoute = require('./routes/personRoute');
// app.use('/', index);
// app.use('/persons', personRoute);
// module.exports = app;

const Sequelize = require('sequelize');

const connection = new Sequelize("cupom_facil","root","//C@rlos1//",{
  host: 'localhost',
  dialect: 'mysql',
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  },
});


const conexao = connection.authenticate()
.then(function(){
   console.log('Conexão com o MySQL foi estabelecida com sucesso');
})
.catch(function (err) {
  console.log('Não foi possível se conectar com o banco de dados MySql', err);
})
.done();
