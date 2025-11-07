# Question 12: MongoDB CRUD Operations

## Description
Perform CRUD operations in MongoDB using Node.js and Mongoose (insert, update, delete, and find operations on a "students" collection).

## Prerequisites
- MongoDB Atlas cloud database (configured)
- Node.js installed

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the program:
   ```bash
   npm start
   ```

## Database Configuration
Using MongoDB Atlas:
- **Cluster:** gokul123
- **Database:** studentdb
- **Connection:** Secure cloud connection configured

## CRUD Operations Performed

### 1. CREATE (Insert)
- Inserts multiple student records using `insertMany()`
- Demonstrates bulk insert operation

### 2. READ (Find)
- `find()` - Retrieves all students
- `findOne()` - Retrieves a single student
- Query with conditions - Finds students by age criteria

### 3. UPDATE
- `updateOne()` - Updates a specific student's information
- Uses `$set` operator to modify fields

### 4. DELETE
- `deleteOne()` - Removes a student from the collection

### 5. FIND with Criteria
- Uses MongoDB query operators like `$gte` (greater than or equal)
- Demonstrates filtering capabilities

## Features
- Mongoose ODM for MongoDB
- Schema definition with validation
- Async/await for cleaner code
- Error handling
- Connection management
- Console output for all operations
- Document counting

## Student Schema
```javascript
{
    name: String (required),
    email: String (required, unique),
    age: Number (required),
    course: String (required),
    enrollmentDate: Date (default: now)
}
```
