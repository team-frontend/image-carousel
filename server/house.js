const db = require('../database/index.js');

module.exports.getByHouseId = (req, res) => {
  const id = req.params.houseID;
  db.getAllImages(id, (err, results) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(200).send(results);
    }
  });
};

module.exports.postByHouseId = (req, res) => {
  // const id = req.params.houseID;
};

module.exports.updateByHouseId = (req, res) => {
  // const id = req.params.houseID;
};

module.exports.deleteByHouseId = (req, res) => {
  // const id = req.params.houseID;
};
