const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '127.0.0.1',   // Replace with your container's IP address
  user: 'root',
  password: 'secret',
  database: 'node_db',
  port: 5506   // The MySQL port
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

module.exports = connection;