var _ = require('lodash')

function generateError (code, name) {
  return function (obj) {
    if (_.isString(obj)) {
      obj = {
        message : obj
      }
    }

    return _.defaults(obj, {
      code    : code,
      name    : name
    })
  }
}

module.exports = {
  BadRequest          : generateError(400, 'Bad Request'),
  Unauthorized        : generateError(401, 'Unauthorized'),
  Forbidden           : generateError(403, 'Forbidden'),
  NotFound            : generateError(404, 'Not Found'),
  InternalServerError : generateError(500, 'Internal Server Error'),
  ServiceUnavailable  : generateError(503, 'Service Unavailable')
}
