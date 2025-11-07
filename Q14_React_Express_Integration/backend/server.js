const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

// In-memory storage for form submissions
let submissions = [];

// API route to receive form data
app.post('/api/submit', (req, res) => {
    const { name, email, message } = req.body;
    
    if (!name || !email || !message) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required'
        });
    }
    
    const submission = {
        id: Date.now(),
        name,
        email,
        message,
        timestamp: new Date().toISOString()
    };
    
    submissions.push(submission);
    
    res.json({
        success: true,
        message: 'Form submitted successfully!',
        data: submission
    });
});

// API route to get all submissions
app.get('/api/submissions', (req, res) => {
    res.json({
        success: true,
        count: submissions.length,
        data: submissions
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Express server running on http://localhost:${PORT}`);
    console.log(`📝 React app should connect to this backend`);
});
