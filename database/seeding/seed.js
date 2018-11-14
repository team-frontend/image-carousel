const db = require('../index');
const faker = require('./fakeData');

const insertImg = () => {
  faker.imgData.forEach((img) => {
    const query = 'INSERT INTO images (imageUrl, houseID) VALUES (?, ?)';
    db.query(query, [img.imageUrl, img.homeID])
      .then(() => {})
      .catch(err => console.log(err));
  });
};

const insertDescrip = () => {
  faker.descripData.forEach((descrip) => {
    const query = 'INSERT INTO house (description) VALUES (?)';
    db.query(query, [descrip.body])
      .then(() => {})
      .catch(err => console.log(err));
  });
};

insertImg();
insertDescrip();
