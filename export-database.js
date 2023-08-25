const mysql = require('mysql');
const fs = require('fs');
const { exec } = require('child_process');

const pool = mysql.createPool({
    connectionLimit: 10, // Adjust as needed
    host: '127.0.0.1',
    user: 'your_database_user',
    password: 'your_database_password',
    database: 'your_database_name'
});

pool.getConnection((err, connection) => {
    if (err) {
        console.error('Error acquiring connection from pool:', err);
        return;
    }

    console.log('Connected to the database');

    // Export data as SQL
    exportDataAsSQL(connection);
});

function exportDataAsSQL(connection) {
    const sqlDumpPath = 'database_dump.sql';

    const dumpCommand = `mysqldump -h ${pool.config.connectionConfig.host} -u ${pool.config.connectionConfig.user} -p${pool.config.connectionConfig.password} ${pool.config.connectionConfig.database} > ${sqlDumpPath}`;

    const child = exec(dumpCommand, (error, stdout, stderr) => {
        if (error) {
            console.error('Error exporting data:', error);
            connection.release(); // Release the connection back to the pool
            return;
        }
        console.log('Data exported to', sqlDumpPath);
        connection.release(); // Release the connection back to the pool
    });

    child.on('close', (code) => {
        console.log('mysqldump process closed with code', code);
        // Do not close the pool here; connections are managed by the pool
    });
}