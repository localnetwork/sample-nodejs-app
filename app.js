const express = require('express');
const app = express();

const PORT = process.env.NODE_PORT || 3000;

const studentsMiddleware = require('./routes/students')


// Define a simple route
app.get('/', (req, res) => {
  res.send('Hello, World!'); 
});


app.use('/students', studentsMiddleware);


app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});