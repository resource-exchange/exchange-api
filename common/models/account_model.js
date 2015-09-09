var _ = require('lodash')
var mysql = 
var Type = attribute_type.Type

var TABLE_NAME = 'accounts'

var attributes = {
  id             : Type.Number,
  email          : Type.String,
  passhash       : Type.String,
  first_name     : Type.String,
  last_name      : Type.String,
  contact_number : Type.String,
  last_known_ip  : Type.String,
  created_at     : Type.Date,
  updated_at     : Type.Date
}
var attributeKeys = _.keys(attributes)

function Account (params) {
  this.
}

module.exports = Account

Account.prototype.create = function (callback) {
  //Validate the values first
  var columnValues = ''
  var query = 'INSERT INTO `' + TABLE_NAME + '` ('
  _.forEach(attributeKeys, function addAttribute (attributeKey) {
    query += attributeKey + ', '
    columnValues += this[attributeKey] + ', '
  })
  query = query.slice(0, -2) + ') VALUES (' + columnValues.slice(0, -2) + ');'

  return mysql.query(query, callback)
}

Account.prototype.save = function (callback) {
  //Validate the values first
  var query = 'UPDATE `' + TABLE_NAME + '` SET '
  _.forEach(attributeKeys, function addAttribute (attributeKey) {
    query += attributeKey + '=' + this[attributeKey] + ', '
  })
  query = query.slice(0, -2) + 'WHERE `id`=' + this.id + ';'

  return mysql.query(query, callback)
}

Account.find = function (params, callback) {
  var query = 'SELECT * FROM `' + TABLE_NAME + '` WHERE `id`=' + params.id + ';'

  return mysql.query(query, callback)
}
