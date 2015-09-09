var utilize = require('requirefrom')('.')
var http    = require('http')
var https   = require('https')
var fs      = require('fs')
var express = require('express')
var _       = require('lodash')

var options = {
  key  : fs.readFileSync('key.pem'),
  cert : fs.readFileSync('certificate.pem')
}

var app    = express()

var router = express.Router()

router.use(require('body-parser').json())

var resourceController = utilize('api/controllers/resource_controller')
resourceController.init(router.route('/resources'), router.route('/resources/:id'))

//Handoff Router to app before stating server
app.use(router)

http.createServer(app).listen(process.env.PORT || 2999)
//https.createServer(options, app).listen(443)
