var utilize = require('requirefrom')('.')
var mysql   = require('mysql')
var logger  = utilize('common/lib/logger')

function init (params, callback) {
  var connection = mysql.createConnection(params)
  connection.connect(function doneConnecting (err) {
    if (err) {
      return callback(err)
    }

    logger.info('Connected to MySQL database')

    module.exports = connection
    delete exports.init

    return callback()
  })
}
/*
if disconnected, try to reconnect and return 503 for all query callbacks
*/
exports.init = init
