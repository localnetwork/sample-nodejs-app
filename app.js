const express = require('express');
const app = express();
const studentsRoute = require('./routes/students'); // Import the students.js module

// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!');
});

// Use the students route module
app.use('/students', studentsRoute);

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});