const express = require('express');
const studentService = require('./students'); // Import your students.js module
const app = express();
const router = express.Router(); // Create an instance of the router

// Endpoint to get all students in JSON format
router.get('/students', (req, res) => {
  studentService.getAllStudents((error, students) => {
    if (error) {
      return res.status(500).json({ error: 'Error getting students' });
    }
    console.log(students)
    // res.json(students);
  });
}); 

router.get('/', getAllStudents);