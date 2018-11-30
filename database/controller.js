const db = require('./index.js');

module.exports.getAllImagesById = (homeId, callback) => {
  const queryString = `SELECT * FROM image_carousel WHERE home_id =1`;
  db.query(queryString, (err, data) => {
    if (err) {
      callback(err, null);
    } else {
      callback(null, data);
    }
  });
};

module.exports.getAllImagesByName = (homeName) => {
  const queryString = 'SELECT * FROM image_carousel WHERE home_name = $1';
  return db.query(queryString, [homeName]);
};

module.exports.getImage = (id) => {
  const queryString = 'SELECT * FROM image_carousel WHERE id = $1';
  return db.query(queryString, [id]);
};

module.exports.getAll = () => {
  const queryString = 'SELECT * FROM image_carousel';
  return db.query(queryString);
};
