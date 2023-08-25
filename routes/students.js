// routes/students.js
const express = require('express');
const router = express.Router();
const studentsService = require('../services/students')

router.get('/', (req, res) => {
    studentsService.getAllStudents((error, students) => {
        console.log(students)
        if (error) {
        return res.status(500).json({ error: 'Error getting students from route' });
        }
        res.json(students);
    });
});

module.exports = router;