const express = require('express')
const db = require('./db-connect')
const app = express()

db()

app.get('/', (req, res) => {
  res.send('Api is Running..')
})
app.listen(5000, console.log('[INFO] Server Running Port on 5000.'))
