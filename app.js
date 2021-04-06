'use strict'

const express = require('express'),
	cors = require('cors'),
	app = express(),
	http = require("http"),
	bodyParser = require('body-parser'),
	methodOverride = require('method-override'),
	server = http.createServer(app)

app.use(cors())
app.use(bodyParser.json())
app.use(methodOverride())

app.get('/', (req, res) => {
	res.send("It works!");
})

require('./routes')(app)

server.listen(3000, function() {
	console.log("Node server running on http://localhost:3000")
})
