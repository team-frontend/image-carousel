const fs = require('fs');


const imgData = [];

const randomNumGenerator = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
const randomImage = () => 'https://s3.us-east-2.amazonaws.com/sdcimagebucket/' + randomNumGenerator(1, 250).toString() + '.jpg'

let str = '';
const imageGenerator = () => {
  for (let i = 1; i <= 10000000; i += 1) {
    str = str + randomImage().toString() + ', ' + i + ', ' + 'home_' + i + '\n';
    if (i % 10000 === 0) {
      fs.appendFileSync('images.csv', str);
      str = '';
    }
  }
};

imageGenerator();


module.exports = {
  imgData,
};
