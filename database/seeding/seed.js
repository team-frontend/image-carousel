const dbIndex = require('../index');
const db = require('./fakeData');

const insertImg = () => {
  db.imgData.forEach((img) => {
    const query = 'INSERT INTO images (imageUrl, houseID) VALUES (?, ?)';
    dbIndex.connection.query(query, [img.imageUrl, img.homeID], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  });
};

const insertDescrip = () => {
  db.descripData.forEach((descrip) => {
    const query = 'INSERT INTO house (description) VALUES (?)';
    dbIndex.connection.query(query, [descrip.body], (err, results) => {
      if (err) {
        console.log(err);
      } else {
        console.log(results);
      }
    });
  });
};

insertImg();
insertDescrip();
