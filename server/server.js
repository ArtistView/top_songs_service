const Express = require('express');
const app = Express();
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

const PORT = 3000;

app.use(cors());
app.use(bodyParser.json());
app.use(Express.static(path.join(__dirname, "../public")))

//const db = require('../../albums_service/database/db.js');
//Promise.promisifyAll(require('mongoose'));

//get route for requests coming in, with songId
app.get('/songs/:songId', (req, res) => {
  var id = req.params.songId
  db.Song.find({_id: id})
    .then((data) => {
      res.send(data)
    })
  res.end();
})

app.listen(PORT, (req, res) => {
  console.log('I am listening on 3000');
})