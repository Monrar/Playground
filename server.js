
const KeyHandler = require('./KeyHandler.js');
let handler = new KeyHandler.KeyHandler('VisualBoyAdvance');

const express = require('express');
const app = express();
const bodyParser = require('body-parser');


const { exec } = require('child_process');


//const jsonParser = bodyParser.json()
//var urlencodedParser = bodyParser.urlencoded({ extended: false })
app.use(bodyParser.json());

// serve files from the public directory
app.use(express.static('public'));

// start the express web server listening on 8080
app.listen(3000, () => {
  console.log('listening on 8080');
});


// serve the homepage
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

app.post('/clicked', (req, res) => {
    var key = req.body.keyValue;
    handler.transfer(key);
    res.sendStatus(201);
})
