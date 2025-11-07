# Question 9: Express.js Student Records API

## Description
Develop an Express.js application that handles GET and POST requests for a simple student record API (add and view student details).

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit http://localhost:3000 in your browser to see API documentation
4. Use cURL, Postman, or any HTTP client to test the endpoints

## API Endpoints

### GET /students
- Retrieves all student records
- Response: JSON array of students

### POST /students
- Adds a new student record
- Required fields: name, email, age, course
- Response: Created student object

### GET /students/:id
- Retrieves a single student by ID
- Response: Student object or 404 if not found

## Testing Examples

**Add a student:**
```bash
curl -X POST http://localhost:3000/students \
  -H "Content-Type: application/json" \
  -d '{"name":"John Doe","email":"john@example.com","age":20,"course":"Computer Science"}'
```

**View all students:**
```bash
curl http://localhost:3000/students
```

**View single student:**
```bash
curl http://localhost:3000/students/1
```

## Features
- Express.js framework
- RESTful API design
- In-memory data storage
- JSON request/response handling
- Input validation
- Error handling
- API documentation page
