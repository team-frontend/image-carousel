const mysql = require('mysql');
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  database: 'img_carousel'
});

connection.connect();

module.exports = connection;
