const connection = require('./index.js');
const db = require('./fakeData.js');

const insertImg = () => {
  db.imgData.forEach((img) => {
    let query = `INSERT INTO images (imageUrl, houseID) VALUES (?, ?)`;
    connection.query(query, [img.imageUrl, img.homeID], (err, results) => {
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
    let query = `INSERT INTO house (description) VALUES (?)`;
    connection.query(query, [descrip.body], (err, results) => {
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
