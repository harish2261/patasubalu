const express = require('express');
const app = express();
const PORT = 3000;

// Middleware
app.use(express.json());

// CORS middleware
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// In-memory employee list
let employees = [
    { id: 1, name: 'John Doe', position: 'Software Engineer', department: 'IT', salary: 75000 },
    { id: 2, name: 'Jane Smith', position: 'Product Manager', department: 'Product', salary: 85000 },
    { id: 3, name: 'Mike Johnson', position: 'Designer', department: 'Design', salary: 65000 }
];

let nextId = 4;

// CREATE - Add a new employee
app.post('/api/employees', (req, res) => {
    const { name, position, department, salary } = req.body;
    
    if (!name || !position || !department || !salary) {
        return res.status(400).json({
            success: false,
            message: 'All fields are required: name, position, department, salary'
        });
    }
    
    const newEmployee = {
        id: nextId++,
        name,
        position,
        department,
        salary: parseFloat(salary)
    };
    
    employees.push(newEmployee);
    
    res.status(201).json({
        success: true,
        message: 'Employee created successfully',
        data: newEmployee
    });
});

// READ - Get all employees
app.get('/api/employees', (req, res) => {
    res.json({
        success: true,
        count: employees.length,
        data: employees
    });
});

// READ - Get a single employee by ID
app.get('/api/employees/:id', (req, res) => {
    const employee = employees.find(e => e.id === parseInt(req.params.id));
    
    if (!employee) {
        return res.status(404).json({
            success: false,
            message: 'Employee not found'
        });
    }
    
    res.json({
        success: true,
        data: employee
    });
});

// UPDATE - Update an employee
app.put('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(e => e.id === id);
    
    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Employee not found'
        });
    }
    
    const { name, position, department, salary } = req.body;
    
    employees[index] = {
        id: id,
        name: name || employees[index].name,
        position: position || employees[index].position,
        department: department || employees[index].department,
        salary: salary ? parseFloat(salary) : employees[index].salary
    };
    
    res.json({
        success: true,
        message: 'Employee updated successfully',
        data: employees[index]
    });
});

// DELETE - Delete an employee
app.delete('/api/employees/:id', (req, res) => {
    const id = parseInt(req.params.id);
    const index = employees.findIndex(e => e.id === id);
    
    if (index === -1) {
        return res.status(404).json({
            success: false,
            message: 'Employee not found'
        });
    }
    
    const deletedEmployee = employees.splice(index, 1)[0];
    
    res.json({
        success: true,
        message: 'Employee deleted successfully',
        data: deletedEmployee
    });
});

// Root route - API Documentation
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Employee REST API</title>
                <style>
                    body { font-family: Arial; max-width: 900px; margin: 50px auto; padding: 20px; }
                    h1 { color: #333; }
                    .endpoint { background: #f4f4f4; padding: 15px; margin: 10px 0; border-radius: 5px; }
                    .method { color: white; padding: 5px 10px; border-radius: 3px; font-weight: bold; margin-right: 10px; }
                    .get { background: #61affe; }
                    .post { background: #49cc90; }
                    .put { background: #fca130; }
                    .delete { background: #f93e3e; }
                    code { background: #f0f0f0; padding: 2px 6px; border-radius: 3px; }
                </style>
            </head>
            <body>
                <h1>👥 Employee REST API</h1>
                <p>In-memory CRUD operations for employee management</p>
                
                <h2>Endpoints:</h2>
                
                <div class="endpoint">
                    <span class="method post">POST</span>
                    <strong>/api/employees</strong> - Create a new employee<br>
                    <small>Body: { name, position, department, salary }</small>
                </div>
                
                <div class="endpoint">
                    <span class="method get">GET</span>
                    <strong>/api/employees</strong> - Get all employees
                </div>
                
                <div class="endpoint">
                    <span class="method get">GET</span>
                    <strong>/api/employees/:id</strong> - Get employee by ID
                </div>
                
                <div class="endpoint">
                    <span class="method put">PUT</span>
                    <strong>/api/employees/:id</strong> - Update an employee<br>
                    <small>Body: { name, position, department, salary } (all optional)</small>
                </div>
                
                <div class="endpoint">
                    <span class="method delete">DELETE</span>
                    <strong>/api/employees/:id</strong> - Delete an employee
                </div>
                
                <h3>Example Usage:</h3>
                <code>curl -X POST http://localhost:3000/api/employees -H "Content-Type: application/json" -d '{"name":"Alice Brown","position":"HR Manager","department":"HR","salary":70000}'</code><br><br>
                <code>curl http://localhost:3000/api/employees</code>
            </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`👥 Employee API is ready with ${employees.length} employees`);
});
