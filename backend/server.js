const express = require('express')
const db = require('./db-connect')
var bodyParser = require('body-parser')
const app = express()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())

app.listen(5000, console.log('[INFO] Server Running Port on 5000.'))

//Routes
var MemberRoute = require('./routes/member-route')

//Subroutes
app.use('/members', MemberRoute)
