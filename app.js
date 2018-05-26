const server = require('./server')
const {connection} =  require('./modules/database')

require('./routes')(server, connection)

module.exports = server;
