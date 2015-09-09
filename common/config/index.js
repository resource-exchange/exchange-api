var utilize = require('requirefrom')('.')
var path    = require('path')
var _       = require('lodash')

if (!process.env.NODE_ENV) {
	process.env.NODE_ENV = 'development'
}

exports.Database = _.defaults(getEnvConfig('database'))

function getEnvConfig (dirName) {
	return require(path.join(__dirname, dirName, process.env.NODE_ENV + '.json'))
}

function getGlobalConfig (configName) {
	return require(path.join(__dirname, configName + '.json'))
}
