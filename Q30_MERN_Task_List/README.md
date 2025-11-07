# Question 30: MERN Task List Application

## Description
Develop a MERN mini-application where the React frontend interacts with an Express + MongoDB backend to manage a task list (add, view, delete tasks).

## Prerequisites
- MongoDB Atlas cloud database (configured)
- Node.js installed

## How to Run

### 1. Start Backend Server
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

**Important:** Opening index.html directly as file:// will cause CORS errors. Always use HTTP server.

## Database Configuration
Using MongoDB Atlas:
- **Cluster:** gokul123
- **Database:** tasksdb
- **Collection:** tasks

## Features

### Backend (Express + MongoDB)
- **POST** `/api/tasks` - Create a new task
- **GET** `/api/tasks` - Get all tasks
- **GET** `/api/tasks/:id` - Get single task
- **PUT** `/api/tasks/:id` - Update task (toggle completion, edit)
- **DELETE** `/api/tasks/:id` - Delete task

### Frontend (React)
- Add new tasks with title, description, and priority
- View all tasks in an organized list
- Mark tasks as completed/incomplete
- Delete tasks with confirmation
- Display statistics (total, pending, completed)
- Priority badges (High, Medium, Low)
- Responsive design with modern UI
- Real-time updates

### Task Schema
```javascript
{
    title: String (required),
    description: String,
    completed: Boolean (default: false),
    priority: String (Low/Medium/High),
    createdAt: Date
}
```

## API Endpoints

### Create Task
```bash
curl -X POST http://localhost:5000/api/tasks \
  -H "Content-Type: application/json" \
  -d '{"title":"Complete project","description":"Finish MERN app","priority":"High"}'
```

### Get All Tasks
```bash
curl http://localhost:5000/api/tasks
```

### Update Task
```bash
curl -X PUT http://localhost:5000/api/tasks/[TASK_ID] \
  -H "Content-Type: application/json" \
  -d '{"completed":true}'
```

### Delete Task
```bash
curl -X DELETE http://localhost:5000/api/tasks/[TASK_ID]
```

## Technologies

### Backend
- **Express.js** - Web framework
- **MongoDB** - Database
- **Mongoose** - ODM
- **CORS** - Cross-origin requests

### Frontend
- **React 18** - UI library (via CDN)
- **Fetch API** - HTTP requests
- **Modern CSS** - Styling

## Application Flow
1. User fills out task form in React frontend
2. Frontend sends POST request to Express backend
3. Backend saves task to MongoDB via Mongoose
4. Backend returns success response
5. Frontend refreshes task list
6. User can mark tasks complete or delete them
7. All changes persist in MongoDB

## Key Features
- Full CRUD operations
- RESTful API design
- React Hooks (useState, useEffect)
- MongoDB persistence
- Error handling
- Loading states
- Responsive UI
- Task statistics
- Priority levels
- Date tracking

## Complete MERN Stack
✅ **M**ongoDB - Database  
✅ **E**xpress.js - Backend framework  
✅ **R**eact - Frontend library  
✅ **N**ode.js - Runtime environment
