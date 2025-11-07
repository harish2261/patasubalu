# Question 11: MySQL Database Operations

## Description
Write a Node.js program that connects to a MySQL database using mysql2, inserts one record into a table, and displays all records in console output.

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
2. Creates `students` table if it doesn't exist
3. Inserts a sample student record
4. Retrieves and displays all records in the console
5. Closes the database connection

## Features
- MySQL2 library for database connection
- Table creation with AUTO_INCREMENT primary key
- Parameterized queries to prevent SQL injection
- Error handling for duplicate entries
- Console output of all records
- Proper connection management

## Database Schema
```sql
CREATE TABLE students (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    age INT NOT NULL,
    course VARCHAR(100) NOT NULL,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
