// Tänne tulee palvelimen koodi
const express = require('express');

const app = express();
const port = 8080;
const host = '0.0.0.0';

app.get('/', function(req, res) {
    res.send("Moi maailma!");
});

app.listen(port, host, () => {
  console.log("server up and running at http://" + host + ":" + port);
});

module.exports = app; // for TDD
