const db = require('./index');

module.exports.getAllImages = (houseID, callback) => {
  const queryString = 'SELECT imageUrl FROM images WHERE houseID = (?)';
  db.query(queryString, [houseID], (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};
