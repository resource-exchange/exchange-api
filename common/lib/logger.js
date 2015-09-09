//Change implementation later, for now keep it simple
var util  = require('util')
var color = require('bash-color')
var _     = require('lodash')

exports.debug = function () {
  return log(color.blue('[debug]'), arguments)
}

exports.info = function () {
  return log(color.green('[info]'), arguments)
}

exports.warn = function () {
  return log(color.yellow('[warning]', true), arguments)
}

exports.error = function (err) {
  return log(color.red('[error]'), arguments)
}

function log (level, args) {
	var callback = args[args.length-1]
	
  var message = util.format.apply(this, arguments[1])

  console.log(level + ' ' + message)

	if (_.isFunction(callback)) {
		callback()
	}
}
