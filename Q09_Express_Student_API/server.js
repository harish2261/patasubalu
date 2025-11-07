const express = require('express');
const app = express();
const PORT = 3000;

// CORS Middleware - Allow requests from any origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Middleware to parse JSON bodies
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// In-memory storage for student records
let students = [];
let nextId = 1;

// GET endpoint - View all students
app.get('/students', (req, res) => {
    res.json({
        success: true,
        count: students.length,
        data: students
    });
});

// POST endpoint - Add a new student
app.post('/students', (req, res) => {
    const { name, rollNumber, department, year } = req.body;
    
    // Validation
    if (!name || !rollNumber || !department || !year) {
        return res.status(400).json({
            success: false,
            message: 'Please provide all required fields: name, rollNumber, department, year'
        });
    }
    
    const newStudent = {
        id: nextId++,
        name,
        rollNumber,
        department,
        year: parseInt(year),
        enrolledDate: new Date().toISOString()
    };
    
    students.push(newStudent);
    
    res.status(201).json({
        success: true,
        message: 'Student added successfully',
        data: newStudent
    });
});

// GET endpoint - View single student by ID
app.get('/students/:id', (req, res) => {
    const student = students.find(s => s.id === parseInt(req.params.id));
    
    if (!student) {
        return res.status(404).json({
            success: false,
            message: 'Student not found'
        });
    }
    
    res.json({
        success: true,
        data: student
    });
});

// Root endpoint
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Student Records API</title>
                <style>
                    body { font-family: Arial; max-width: 800px; margin: 50px auto; padding: 20px; }
                    h1 { color: #333; }
                    .endpoint { background: #f4f4f4; padding: 15px; margin: 10px 0; border-radius: 5px; }
                    .method { color: white; padding: 5px 10px; border-radius: 3px; font-weight: bold; }
                    .get { background: #61affe; }
                    .post { background: #49cc90; }
                    code { background: #f0f0f0; padding: 2px 6px; border-radius: 3px; }
                </style>
            </head>
            <body>
                <h1>📚 Student Records API</h1>
                <p>Simple Express.js API for managing student records</p>
                
                <div class="endpoint">
                    <span class="method get">GET</span>
                    <strong>/students</strong> - View all students
                </div>
                
                <div class="endpoint">
                    <span class="method post">POST</span>
                    <strong>/students</strong> - Add a new student<br>
                    <small>Body: { name, email, age, course }</small>
                </div>
                
                <div class="endpoint">
                    <span class="method get">GET</span>
                    <strong>/students/:id</strong> - View single student
                </div>
                
                <h3>Test with cURL or Postman:</h3>
                <code>curl http://localhost:3000/students</code><br><br>
                <code>curl -X POST http://localhost:3000/students -H "Content-Type: application/json" -d '{"name":"John Doe","email":"john@example.com","age":20,"course":"Computer Science"}'</code>
            </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📚 Student Records API is ready`);
    console.log(`\nAvailable endpoints:`);
    console.log(`  GET  http://localhost:${PORT}/students`);
    console.log(`  POST http://localhost:${PORT}/students`);
    console.log(`  GET  http://localhost:${PORT}/students/:id`);
});
