const db = require('./index');

module.exports.getAllImages = (houseID, callback) => {
  db.query('SELECT imageUrl FROM images WHERE houseID = (?)', [houseID], (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};
