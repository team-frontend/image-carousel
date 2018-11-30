const fs = require('fs');

const imgData = [];

const randomNumGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomImage = () => 'https://s3.us-east-2.amazonaws.com/sdcimagebucket/' + randomNumGenerator(1, 250).toString() + '.jpg'

let str = '';
const imageGenerator = () => {
  count = 1;
  for (let i = 1; i <= 10000000; i += 1) {
    for (let j = 1; j <= 5; j += 1) {
      str = str + count + ',' + i + ',' + 'home_' + i + ',' + randomImage().toString() +  '\n';
      count += 1;
      if (i % 10000 === 0) {
        fs.appendFileSync('images.csv', str);
        str = '';
      }
    }
  }
};

imageGenerator();


module.exports = {
  imgData,
};
