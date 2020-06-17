const Express = require('express');
const app = Express();
const cors = require('cors');
const bodyParser = require('body-parser')

const PORT = 3000;

app.use(cors())
app.use(bodyParser.json());

app.get('/', (req, res) => {
  console.log('got a get');
  res.end();
})

app.listen(PORT, (req, res) => {
  console.log('I am listening on 3000')
})