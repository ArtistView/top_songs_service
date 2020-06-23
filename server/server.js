const Express = require('express');
const app = Express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');
const Promise = require('bluebird');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(Express.static(path.join(__dirname, "../public")));

const db = require('../database/database.js');
Promise.promisifyAll(require('mongoose'));

//get route for requests coming in, with songId
app.get('/songs/:songId', (req, res) => {
  var id = req.params.songId;
  console.log('I got a get');
  db.Song.find({_id: id})
    .then((data) => {
      res.send(data)
    })
})

//gets the top five songs by listens
app.get('/songs', (req, res) => {
  console.log('I got a get for top 5');
  db.getTopFive()
    .then((data) => {
      //console.log('I got the images back', data)
      res.send(data)
    })
    .catch((err) => console.log(err))
})

app.listen(PORT, (req, res) => {
  console.log('I am listening on 3000');
})