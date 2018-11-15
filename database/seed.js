const dbIndex = require('./index.js');
const db = require('./fakeData.js');

const insertImg = () => {
  db.imgData.forEach((img) => {
    const query = 'INSERT INTO images (imageUrl, home_id) VALUES (?, ?)';
    dbIndex.connection.query(query, [img.imageUrl, img.home_id], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  });
};


insertImg();
