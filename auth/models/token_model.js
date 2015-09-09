var utilize = require('requirefrom')('.')
var async   = require('async')
var Errors  = utilize('common/lib/errors')

/*
parameters
{
  email,
  password
}
*/
function createToken (params, callback) {
  if (!params.email) {
    return callback(Errors.BadRequest({
      field   : 'email',
      message : 'Must provide email'
    }))
  }

  if (!params.password) {
    return callback(Errors.BadRequest({
      field   : 'password',
      message : 'Must provide password'
    }))
  }

  /*
  1) get account info
  2) verify password with hash
  3) 
  */
  return async.series([
  ], callback)
}