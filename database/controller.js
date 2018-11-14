const db = require('./index');

module.exports.getImage = (id) => {
  const queryString = 'SELECT imageUrl FROM images WHERE id = (?)';
  return db.query(queryString, [id]);
};

module.exports.addImage = (data) => {
  // const queryString = 'SELECT imageUrl FROM images WHERE id = (?)';
  // return db.query(queryString, [id]);
};

module.exports.updateImage = (id) => {
  // const queryString = 'SELECT imageUrl FROM images WHERE id = (?)';
  // return db.query(queryString, [id]);
};

module.exports.deleteImage = (id) => {
  // const queryString = 'SELECT imageUrl FROM images WHERE id = (?)';
  // return db.query(queryString, [id]);
};

module.exports.getAllImages = (houseID) => {
  const queryString = 'SELECT imageUrl FROM images WHERE houseID = (?)';
  return db.query(queryString, [houseID]);
};
