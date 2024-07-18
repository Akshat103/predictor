const sqlite3 = require('sqlite3').verbose();
const path = require('path');

const db = new sqlite3.Database(path.join(__dirname, 'predictor.db'), (err) => {
    if (err) {
        console.error('Error connecting to the database', err);
        process.exit(1);
    } else {
        console.log('Connected to SQLite database');
    }
});

module.exports = db;
