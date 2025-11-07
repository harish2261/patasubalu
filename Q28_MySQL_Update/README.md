# Question 28: MySQL Update Operations

## Description
Connect a Node.js application with MySQL2, create a table named employee, and update an existing record.

## Prerequisites
- MySQL Aiven Cloud database (configured)
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
Using Aiven Cloud MySQL:
- **Host:** mysql-c1108d-gokulmicrosaas-4a1a.e.aivencloud.com
- **Port:** 11264
- **Database:** defaultdb
- **SSL:** Required (configured)

## What the Program Does
1. Connects to MySQL database
2. Creates `employee` table if it doesn't exist
3. Inserts sample employee records
4. Displays all records (before update)
5. **Updates an existing employee record**
6. Displays all records (after update)
7. Closes the database connection

## Update Operation
The program updates:
- **Employee:** john.doe@company.com
- **From:** Software Engineer, $75,000
- **To:** Senior Software Engineer, $90,000

## Database Schema
```sql
CREATE TABLE employee (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    position VARCHAR(100) NOT NULL,
    department VARCHAR(100) NOT NULL,
    salary DECIMAL(10, 2) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```

## Features
- MySQL2 connection
- Table creation with constraints
- Batch insert operations
- UPDATE query with WHERE clause
- Before/After comparison
- Error handling
- Duplicate entry handling
- Proper connection management

## Technologies
- Node.js
- mysql2
- SQL UPDATE statement
