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

// app.get('/songs', (req, res) => {
//   db.Song.find()
//     .then((data) => {
//       res.send(data)
//     })
//   res.end();
// })

app.listen(PORT, (req, res) => {
  console.log('I am listening on 3000');
})