const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const apiRoutes = require('./routes/api');

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Set static folder for frontend
app.use(express.static(path.join(__dirname, 'public')));

// Set view engine for dynamic pages
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// API Routes
app.use('/api', apiRoutes);

// Main Route
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// Start server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));