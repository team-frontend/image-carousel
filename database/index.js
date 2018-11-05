const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'img_carousel',
});

const getAllImages = (houseID, callback) => {
  connection.query('SELECT imageUrl FROM images WHERE houseID = (?)', [houseID], (err, results) => {
    if (err) {
      callback(err);
    } else {
      callback(null, results);
    }
  });
};

module.exports = {
  connection,
  getAllImages,
};
