require('newrelic');
const express = require('express');

const app = express();
const port = 3003;
const path = require('path');
const bodyParser = require('body-parser');

const db = require('../database/controller.js');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, '../client/dist')));

app.use((req, res, next) => {
  // console.log(`Incoming from ${req.path} and ${req.method}`);
  next();
});

// app.use('/api/homes/:home/images', routerHome);
// app.use('/api/images/:image', routerImages);
// //app.use('/images', routerImages);

app.get('/api/homes/:id', (req, res) => {
  const { id } = req.params;
  let stringId = id.toString();
  db.getAllImagesById(id, (err, data) => {
    if (err) {
      res.end(err);
    } else {
      //res.writeHead(200, { 'Content-Type': 'application/json'});
      res.end(JSON.stringify(data));
    }
  })
});

app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
