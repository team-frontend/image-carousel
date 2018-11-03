const express = require('express');
const dbIndex = require('../database/index.js');

const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.get('/images/:houseID', (req, res) => {
  // console.log('this is req.params.houseID', req.params.houseID);
  const id = req.params.houseID;
  // hardcoded id for now to test react component, page won't render pictures if not hardcoded, just shows the array with object
  dbIndex.getAllImages(33, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
