'use strcit'

require('dotenv').config();
const mysql = require('mysql');

const connectionSQL = mysql.createConnection({
    host: process.env.DATABASE_HOST,
    user: process.env.DATABASE_USER,
    database: process.env.DATABASE_NAME
});

connectionSQL.connect(function (err) {
    if (err) {
        console.log('Database Failed to Connect');
    } else {
        console.log('Database Connected Successfully');
    }
});

module.exports = connectionSQL;