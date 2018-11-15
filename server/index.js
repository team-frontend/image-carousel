const express = require('express');

const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');

const dbIndex = require('../database/index.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/images/:home_id', (req, res) => {
  dbIndex.getAllImages(5, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

// app.post('/images', (req, res) => {

// })

// app.put('/images/:home_id', (req, res) => {
  
// })

// app.delete('/images/:home_id', (req, res) => {
  
// })


app.listen(port, () => {
  console.log(`listening on port ${port}`);
});

// app.get('/images/:home_id', (req, res) => {
//   const idParam = req.params.home_id;
//   const queryString = 'SELECT imageUrl FROM images WHERE home_id = (?)';
//   dbIndex.connection.query(queryString, idParam, (err, data) => {
//     if (err) {
//       console.log('error getting the images from teh database');
//     }
//     res.send(data[0]);
//   })
// });