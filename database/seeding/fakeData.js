require('dotenv').config();
const faker = require('faker');

const homeUrlBase = `${process.env.S3_BUCKET}/assets/media`;
const imgData = [];
const descripData = [];
const NPOINTS = 60e6;

const imageGenerator = () => {
  for (let i = 1; i <= NPOINTS; i += 1) {
    const imageStorage = {};
    imageStorage.imageUrl = `${homeUrlBase}/home${faker.random.number({ min: 1, max: 100 })}.jpg`;
    imageStorage.homeID = faker.random.number({ min: 1, max: NPOINTS });
    imgData.push(imageStorage);
  }
};

const descriptionGenerator = () => {
  for (let i = 1; i <= NPOINTS; i += 1) {
    const descripStorage = {};
    descripStorage.body = `For Sale: $${faker.random.number({ min: 200000, max: 1500000 })} `
    + `(${faker.random.number({ min: 1, max: 5 })} bed, ${faker.random.number({ min: 1, max: 5 })}`
    + ` bath, ${faker.random.number({ min: 450, max: 10000 })} sqft)`;
    descripData.push(descripStorage);
  }
};

imageGenerator();
descriptionGenerator();

module.exports = {
  imgData,
  descripData,
};
