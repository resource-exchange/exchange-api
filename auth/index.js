var utilize = require('requirefrom')('.')
var http    = require('http')
var https   = require('https')
var fs      = require('fs')
var express = require('express')
var async   = require('async')
var _       = require('lodash')
var logger  = utilize('common/lib/logger')

var options = {
  key  : fs.readFileSync('key.pem'),
  cert : fs.readFileSync('certificate.pem')
}

var databaseConfig = utilize('common/config').Database

return async.series([
	function initializeMysql (callback) {
		var mysql = utilize('common/connections/mysql')
		return mysql.init(databaseConfig.mysql, callback)
	}
],
function doneInitializing (err) {
	if (err) {
		return logger.log(err, function doneLogging () {
			return process.exit(1)
		})
	}

	var app    = express()

	var router = express.Router()

	router.use(require('body-parser').json())

	var tokenController = utilize('auth/controllers/token_controller')
	tokenController.init(router.route('/tokens'), router.route('/tokens/:id'))

	app.use(router)

	var port = process.env.PORT || 2999

	http.createServer(app).listen(port)
	//https.createServer(options, app).listen(443)

	logger.info('Listening on port ' + port)
})
