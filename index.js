const express = require('express');
const app = express();
const port = 3000;
const request = require('request')
const fs = require("fs");

app.use(express.static('public'));

const path = require('path');

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/index.html'));
})

app.listen(port, () => console.log(`Digital Ocean app listening on port ${port}!`))
