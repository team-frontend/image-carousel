const faker = require('faker');

let homeUrls = ["https://s3-us-west-1.amazonaws.com/zillowhouses/House-In-Cliff-with-Pool.jpg",
"https://s3-us-west-1.amazonaws.com/zillowhouses/cliff-house-interior.jpg",
"https://s3-us-west-1.amazonaws.com/zillowhouses/front+view+housebythecliff-1024x608.jpg",
"https://s3-us-west-1.amazonaws.com/zillowhouses/interior+houseonthecliff.jpg",
"https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg"];


let imgData = [];
let descripData = [];

let randomNumGenerator = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

let imageGenerator = () => {
  for (var i = 1; i <= 100; i++) {
    let imageStorage = {};
    imageStorage.imageUrl = homeUrls[randomNumGenerator(0, 4)];
    imageStorage.homeID = faker.random.number({'min': 1, 'max': 100});
    imgData.push(imageStorage);
  }
}

let descriptionGenerator = () => {
  for (var i = 1; i <= 100; i++) {
    let descripStorage = {};
    descripStorage.body = `For Sale: $${faker.random.number({'min': 200000, 'max': 1500000})} (${faker.random.number({'min': 1, 'max': 5})} bed, ${faker.random.number({'min': 1, 'max': 5})} bath, ${faker.random.number({'min': 450, 'max': 10000})} sqft)`;
    descripData.push(descripStorage);
  }
}

imageGenerator();
descriptionGenerator();

module.exports = {
  imgData: imgData,
  descripData: descripData
}
