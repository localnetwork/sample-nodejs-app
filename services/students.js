const connection = require('../db'); // Assuming db.js is in the same directory


function getAllStudents(callback) {
    const query = 'SELECT * FROM students';
    connection.query(query, (error, results) => {
        if (error) {
            console.error('Error executing query:', error);
            callback(error, null);
        } else {
            callback(null, results);
        } 
    });
}


// Call the function to see the results
getAllStudents((error, students) => {
    if (error) {
        console.error('Error executing query:', error);
        return;
    }
    // connection.end(); // Do not close the connection.
});

// Don't forget to close the pool when the application is shutting down
process.on('exit', () => {
    connection.end();
});

module.exports = {
    getAllStudents
};
