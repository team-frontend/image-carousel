const faker = require('faker');
const fs = require('fs');
const wstream = fs.createWriteStream('./../file.tsv');

const randomNumGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;

const fakeDataGenerator = (i) => {
  const homeUrls = ['https://s3-us-west-1.amazonaws.com/zillowhouses/House-In-Cliff-with-Pool.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/cliff-house-interior.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/front+view+housebythecliff-1024x608.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/interior+houseonthecliff.jpg',
    'https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg'];

  for (; i <= 10000000; i++) {
    let randomNum = randomNumGenerator(0, 4);
    const imageUrl = homeUrls[randomNum];
    if (!wstream.write(imageUrl + '\n')) {
      wstream.once('drain', () => {
        fakeDataGenerator(i + 1);
      });
      return;
    }
  }
  wstream.end();
};
fakeDataGenerator(1);

// this is the file that will be written to, it will be created first, then written to.
// imgData.push(imageStorage);
// (${expression}). The expressions in the placeholders and the text between them get passed to a function
// allows for embedding information
// If the function can't write the combination of the generated data and a new line.
// drain the file
// start on the next item in the loop

// const homeUrls = ['https://s3-us-west-1.amazonaws.com/zillowhouses/House-In-Cliff-with-Pool.jpg',
//   'https://s3-us-west-1.amazonaws.com/zillowhouses/cliff-house-interior.jpg',
//   'https://s3-us-west-1.amazonaws.com/zillowhouses/front+view+housebythecliff-1024x608.jpg',
//   'https://s3-us-west-1.amazonaws.com/zillowhouses/interior+houseonthecliff.jpg',
//   'https://s3-us-west-1.amazonaws.com/zillowhouses/interior-malibu-home.jpg'];

// const imageGenerator = () => {
//   for (let i = 1; i <= 3; i += 1) {
//     const imageStorage = {};
//     imageStorage.imageUrl = homeUrls[randomNumGenerator(0, 4)];
//     imageStorage.homeID = faker.random.number({ min: 1, max: 5 });
//     imgData.push(imageStorage);
//   }
// };

// imageGenerator();
// console.log(imgData);