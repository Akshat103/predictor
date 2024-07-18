const express = require('express');
const path = require('path');
const db = require('./db');
const collegeRoutes = require('./routes/collegesRoute');

const app = express();
const PORT = 5000;

// Middleware to parse JSON
app.use(express.json());

// API routes
app.use('/api/colleges', collegeRoutes);

// Serve static files from the ./client directory
app.use(express.static(path.join(__dirname, 'client')));

// Welcome route
app.get('/api/welcome', (req, res) => {
    res.send('Welcome to the API!');
});

// Fallback route to serve index.html for any non-API routes
app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'client', 'index.html'));
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
