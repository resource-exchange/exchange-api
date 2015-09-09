var utilize = require('requirefrom')('.')
var util    = require('util')
var _       = require('lodash')

exports.init = function (rootRoute, subRoute) {
  rootRoute
    .post(create)
    .delete(destroyAll)
  subRoute
    .get(index)
    .delete(destroy)
}

function create (req, res, next) {
	
}

function destroyAll (req, res, next) {
	
}

function index (req, res, next) {
	
}

function destroy (req, res, next) {
	
}
