const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app
  .use(history())
  .use(express.static(path.join(__dirname, '../dist')))
  .listen(5000)

console.log('running: http://localhost:5000')
