const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '192.168.80.3',   // Replace with your container's IP address
  user: 'root',
  password: 'secret',
  database: 'node_db',
  port: 8077   // The MySQL port
});

connection.connect((err) => {
  if (err) {
    console.error('Error connecting to the database:', err);
    return;
  }
  console.log('Connected to the database!');
});

module.exports = connection;