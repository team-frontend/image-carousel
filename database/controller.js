const db = require('./index');

module.exports.getImage = (id) => {
  const queryString = 'SELECT imageUrl FROM images WHERE id = (?)';
  return db.query(queryString, [id]);
};

module.exports.addImage = ({ imageUrl, houseId }) => {
  const queryString = 'INSERT INTO images (imageUrl, houseID) VALUES (?, ?)';
  return db.query(queryString, [imageUrl, houseId]);
};

module.exports.updateImage = ({ imageUrl, houseId, id }) => {
  const queryString = 'UPDATE images SET imageUrl = (?), houseID = (?) WHERE id = (?)';
  return db.query(queryString, [imageUrl, houseId, id]);
};

module.exports.deleteImage = (id) => {
  const queryString = 'DELETE FROM images WHERE id = (?)';
  return db.query(queryString, [id]);
};

module.exports.getAllImages = (houseID) => {
  const queryString = 'SELECT imageUrl FROM images WHERE houseID = (?)';
  return db.query(queryString, [houseID]);
};

module.exports.postAllImages = (houseID, imageUrls) => {
  let queryString = 'INSERT INTO images (imageUrl, houseID) VALUES ';
  const images = [];
  const queries = imageUrls.map(() => ' (?, ?)');
  imageUrls.forEach((image) => { images.push(image, houseID); });
  queryString += queries.join(',');
  return db.query(queryString, [houseID, ...images]);
};

// Dont think this will work.
module.exports.updateAllImages = (houseID, imageUrls) => {
  let queryString = 'INSERT INTO images (imageUrl, houseID) VALUES ';
  const images = [];
  const queries = imageUrls.map(() => ' (?, ?)');
  imageUrls.forEach((image) => { images.push(image, houseID); });
  queryString += queries.join(',');
  queryString += 'ON DUPLICATE KEY UPDATE imageUrl=VALUES(imageUrl), houseID=VALUES(houseID)';
  return db.query(queryString, [houseID, ...images]);
};

module.exports.deleteAllImages = (houseID) => {
  const queryString = 'DELETE FROM images WHERE houseId = (?)';
  return db.query(queryString, [houseID]);
};
