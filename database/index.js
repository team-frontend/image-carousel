const { Client } = require('pg');

const client = new Client({
  port: 5432,
  user: 'Ben',
  //password: '',
  database: 'imagecarousel',
});

client.connect((err) => {
  if (err) {
    console.error('connection error', err.message);
  } else {
    console.log('connected');
  }
});

module.exports = client;
