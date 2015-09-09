var utilize = require('requirefrom')('.')
var bcrypt  = require('bcrypt')
var async   = require('async')

function generatePasshash (password, callback) {
  return async.waterfall([
    function generateSalt (callback) {
      return bcrypt.genSalt(10, callback)
    },
    function generateHash (salt, callback) {
      return bcrypt.hash(password, salt, callback)
    }
  ], callback)
}

function isValidPassword (password, passhash, callback) {
  return bcrypt.compare(password, passhash, callback)
}
