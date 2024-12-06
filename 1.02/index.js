const express = require('express')
const path = require('path');

require('dotenv').config()

const app = express()
const port = process.env.PORT || 3001

app.get('/', function(req, res) {
  res.sendFile(path.join(__dirname, '/hello.html'));
});

app.listen(port, () => {
  console.log(`Server started in port ${port}`)
})