# Question 15: MERN CRUD Application

## Description
Build a MERN mini-project that performs CRUD operations on user data (create, read, update, delete) with MongoDB as the backend database.

## Project Structure
```
Q15_MERN_CRUD/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    ├── index.html
    ├── app.js
    └── styles.css
```

## Prerequisites
- MongoDB Atlas cloud database (configured)
- Node.js installed

## How to Run

### 1. Start Backend
```bash
cd backend
npm install
node server.js
```
Backend will run on http://localhost:5000

### 2. Start Frontend (Option 1 - Python HTTP Server)
```bash
cd frontend
python3 -m http.server 8080
```
Then open http://localhost:8080 in your browser

### 2. Start Frontend (Option 2 - Node HTTP Server)
```bash
cd frontend
npx http-server -p 8080
```
Then open http://localhost:8080 in your browser

**Important:** Don't open index.html directly (file://) - it will cause CORS errors. Always use an HTTP server.

## Database Configuration
Using MongoDB Atlas:
- **Cluster:** gokul123
- **Database:** userdb
- **Collection:** users

## Features

### Complete CRUD Operations
- **CREATE:** Add new users with name, email, age, and city
- **READ:** Display all users in a grid layout
- **UPDATE:** Edit existing user information
- **DELETE:** Remove users with confirmation dialog

### Additional Features
- Real-time updates after each operation
- Form validation
- Success/error messages
- Edit mode with form pre-population
- Responsive card-based layout
- User count display
- Loading states
- Timestamps for each user

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| POST | /api/users | Create new user |
| GET | /api/users | Get all users |
| GET | /api/users/:id | Get single user |
| PUT | /api/users/:id | Update user |
| DELETE | /api/users/:id | Delete user |

## Technologies Used
- **M**ongoDB - Database
- **E**xpress.js - Backend framework
- **R**eact - Frontend library
- **N**ode.js - Runtime environment

## User Schema
```javascript
{
    name: String (required),
    email: String (required, unique),
    age: Number (required),
    city: String,
    createdAt: Date (default: now)
}
```
