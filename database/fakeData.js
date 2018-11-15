const faker = require('faker');

const homeUrls = ['https://s3-us-west-1.amazonaws.com/zillowhouses/House-In-Cliff-with-Pool.jpg',
  'https://s3-us-west-1.amazonaws.com/zillowhouses/cliff-house-interior.jpg',
  'https://s3-us-west-1.amazonaws.com/zillowhouses/front+view+housebythecliff-1024x608.jpg',
  'https://s3-us-west-1.amazonaws.com/zillowhouses/interior+houseonthecliff.jpg',
  'https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg'];

const imgData = [];

const randomNumGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const imageGenerator = () => {
  for (let i = 1; i <= 100; i += 1) {
    const imageStorage = {};
    imageStorage.imageUrl = homeUrls[randomNumGenerator(0, 4)];
    imageStorage.home_id = faker.random.number({ min: 1, max: 100 });
    imgData.push(imageStorage);
  }
};

imageGenerator();

module.exports = {
  imgData,
};
