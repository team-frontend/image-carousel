const db = require('../database/index.js');

module.exports.getByHomeId = (req, res) => {
  const id = req.params.home;
  db.getAllImages(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

module.exports.postByHomeId = (req, res) => {
  // const id = req.params.home;
};

module.exports.updateByHomeId = (req, res) => {
  // const id = req.params.home;
};

module.exports.deleteByHomeId = (req, res) => {
  // const id = req.params.home;
};
