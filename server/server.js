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
      res.send(data)
    })
})

// THIS WAS USED TO POPULATE THE DATA
// const artists = require('../../albums_service/Artists.js');
// for (var artist of artists) {
//   var artist1 = new db.Artist(artist);
//   artist1.save(() => {
//     console.log('saved artists')
//   })
// }

// const albums = require('../../albums_service/Albums.js');
// for (var album of albums) {
//   var album1 = new db.Album(album);
//   album1.save(() => {
//     console.log('saved albums')
//   })
// }

// const songs = require('../../albums_service/Songs.js');
// for (var song of songs) {
//   var song1 = new db.Song(song);
//   song1.save(() => {
//     console.log('saved songs')
//   })
// }


app.listen(PORT, (req, res) => {
  console.log('I am listening on 3000');
})