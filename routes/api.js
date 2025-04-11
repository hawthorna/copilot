const express = require('express');
const router = express.Router();

// Simulated database (replace with real DB in production)
let registrations = [];

// API Endpoints

// Get all registrations
router.get('/registrations', (req, res) => {
    res.json(registrations);
});

// Add new registration
router.post('/registrations', (req, res) => {
    const newRegistration = req.body;
    registrations.push(newRegistration);
    res.status(201).json({ message: 'Registration added successfully', data: newRegistration });
});

// Update registration
router.put('/registrations/:id', (req, res) => {
    const { id } = req.params;
    const updatedData = req.body;
    registrations[id] = { ...registrations[id], ...updatedData };
    res.json({ message: 'Registration updated successfully', data: registrations[id] });
});

// Delete registration
router.delete('/registrations/:id', (req, res) => {
    const { id } = req.params;
    registrations.splice(id, 1);
    res.json({ message: 'Registration deleted successfully' });
});

module.exports = router;