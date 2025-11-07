# Question 14: React + Express Integration

## Description
Create a React + Express integration where form data entered in React is sent to an Express backend and displayed on submission.

## Project Structure
```
Q14_React_Express_Integration/
├── backend/
│   ├── server.js
│   └── package.json
└── frontend/
    └── index.html
```

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

**Note:** Don't open index.html directly (file://) - it will cause CORS errors. Use HTTP server.

**Note:** Make sure the backend is running before testing the form!

## Features
- React frontend with form
- Express backend API
- CORS enabled for cross-origin requests
- Form data sent via POST request
- Data displayed dynamically after submission
- All submissions stored and displayed
- Error handling for network issues
- Loading states during submission

## API Endpoints

### POST /api/submit
- Accepts form data (name, email, message)
- Returns success response with submitted data

### GET /api/submissions
- Returns all form submissions

## Technologies Used
- **Frontend:** React 18 (via CDN), Fetch API
- **Backend:** Express.js, CORS middleware
- **Data Storage:** In-memory array

## How It Works
1. User fills out the form in React
2. On submit, data is sent to Express backend via fetch()
3. Backend validates and stores the data
4. Backend sends success response
5. React displays the submitted data
6. All submissions are fetched and displayed below the form
