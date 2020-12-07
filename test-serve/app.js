const path = require('path')
const express = require('express')
const history = require('connect-history-api-fallback')

const app = express()

app
  .use(history())
  .use(express.static(path.join(__dirname, '../dist')))
  .listen(520)

console.log(`
App running at:
- Local:   http://localhost:520/
- Network: http://192.168.31.69:520/
`)
