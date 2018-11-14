const db = require('../database/index.js');

module.exports.getById = (req, res) => {
  const id = req.params.houseID;
  db.getAllImages(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

module.exports.postById = (req, res) => {
  // const id = req.params.houseID;
};

module.exports.deleteByIda = (req, res) => {
  // const id = req.params.houseID;
};

module.exports.updateById = (req, res) => {
  // const id = req.params.houseID;
};
