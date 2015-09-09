var utilize = require('requirefrom')('.')
var util    = require('util')
var _       = require('lodash')

exports.init = function (rootRoute, subRoute) {
  rootRoute
    .get(show)
}

function show (req, res, next) {
  return res.send({
    someKey: 'someValue'
  })
}
