const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'ben',
  database: 'img_carousel',
});

const getAllImages = (home_id, callback) => {
  connection.query('SELECT imageUrl FROM images WHERE home_id = (?)', [home_id], (err, results) => {
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
