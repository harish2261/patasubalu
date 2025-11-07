# Question 27: Employee REST API

## Description
Implement a REST API in Express.js to perform CRUD operations on an in-memory "employee" list.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit http://localhost:3000 for API documentation
4. Use cURL, Postman, or any HTTP client to test endpoints

## API Endpoints

### CREATE - POST /api/employees
Create a new employee
```bash
curl -X POST http://localhost:3000/api/employees \
  -H "Content-Type: application/json" \
  -d '{"name":"Alice Brown","position":"HR Manager","department":"HR","salary":70000}'
```

### READ - GET /api/employees
Get all employees
```bash
curl http://localhost:3000/api/employees
```

### READ - GET /api/employees/:id
Get a single employee by ID
```bash
curl http://localhost:3000/api/employees/1
```

### UPDATE - PUT /api/employees/:id
Update an employee
```bash
curl -X PUT http://localhost:3000/api/employees/1 \
  -H "Content-Type: application/json" \
  -d '{"salary":80000}'
```

### DELETE - DELETE /api/employees/:id
Delete an employee
```bash
curl -X DELETE http://localhost:3000/api/employees/1
```

## Features
- Full CRUD operations
- In-memory data storage
- RESTful API design
- Input validation
- Error handling
- API documentation page
- Pre-populated with sample data

## Employee Data Structure
```javascript
{
    id: Number,
    name: String,
    position: String,
    department: String,
    salary: Number
}
```

## Technologies
- Express.js
- REST API principles
- In-memory storage (array)
