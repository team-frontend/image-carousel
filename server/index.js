require('dotenv').config();
const path = require('path');
const bodyParser = require('body-parser');
const express = require('express');
const {
  getById,
  postById,
  deleteById,
  updateById,
} = require('./routes');

const app = express();
const port = process.env.PORT;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res, next) => {
  console.log(`Incoming from ${req.path} and ${req.method}`);
  next();
});

app.post('/images/:houseID', postById);
app.get('/images/:houseID', getById);
app.patch('/images/:houseID', updateById);
app.delete('/images/:houseID', deleteById);

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
