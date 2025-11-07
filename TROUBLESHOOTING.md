# Common Issues and Solutions

## CORS Errors with React Apps

### Problem
```
Cross-Origin Request Blocked: CORS request not http
```

### Cause
Opening HTML files directly (file://) instead of through HTTP server

### Solution
Always serve frontend files through an HTTP server:

**Option 1: Python HTTP Server (Built-in)**
```bash
cd frontend
python3 -m http.server 8080
# Open http://localhost:8080
```

**Option 2: Node HTTP Server**
```bash
cd frontend
npx http-server -p 8080
# Open http://localhost:8080
```

**Option 3: VS Code Live Server Extension**
- Install "Live Server" extension in VS Code
- Right-click index.html → "Open with Live Server"

---

## Port Already in Use

### Problem
```
Error: listen EADDRINUSE: address already in use :::3000
```

### Solution
Kill the process using that port:

```bash
# Find and kill process on port 3000
lsof -ti:3000 | xargs kill -9

# Find and kill process on port 5000
lsof -ti:5000 | xargs kill -9

# Find and kill process on port 8080
lsof -ti:8080 | xargs kill -9
```

---

## MySQL/MongoDB Connection Errors

### MySQL SSL Error
```
Error: self-signed certificate in certificate chain
```

**Solution:** Set `rejectUnauthorized: false` in SSL config
```javascript
ssl: {
    rejectUnauthorized: false
}
```

### MongoDB Atlas Connection
Make sure your IP is whitelisted in MongoDB Atlas:
1. Go to MongoDB Atlas → Network Access
2. Add current IP or use 0.0.0.0/0 (allow from anywhere)

---

## Missing Dependencies

### Problem
```
Error: Cannot find module 'express'
```

### Solution
```bash
npm install
```

---

## Server Not Starting

### Check if MongoDB/MySQL is Running
```bash
# Check MongoDB Atlas connection (already cloud-based)
# Check MySQL Aiven connection (already cloud-based)
```

### Restart Server
```bash
# Stop server: Ctrl+C in terminal
# Start server: node server.js
```

---

## Frontend Can't Connect to Backend

### Checklist
1. ✅ Backend server is running (check terminal)
2. ✅ Correct API URL in frontend (http://localhost:5000)
3. ✅ CORS is enabled in backend server
4. ✅ Frontend served via HTTP (not file://)

### Test Backend
```bash
curl http://localhost:5000/api/endpoint
```

---

## React App Not Loading

### Problem
Blank page or console errors

### Solutions
1. Check browser console for errors (F12)
2. Make sure React CDN links are loading
3. Serve via HTTP server (not file://)
4. Clear browser cache (Cmd+Shift+R)

---

## Quick Reference: Run Commands

### HTML/CSS/JS Projects (Q1-7, Q16-20)
```bash
open index.html
# Or use Live Server in VS Code
```

### Node.js Server Projects (Q8, Q23, Q26)
```bash
npm install
node server.js
```

### Express API Projects (Q9, Q10, Q24, Q25, Q27)
```bash
npm install
node server.js
# Open http://localhost:3000
```

### Database Projects (Q11, Q12, Q28, Q29)
```bash
npm install
node server.js
# Check console for output
```

### MongoDB REST APIs (Q13)
```bash
npm install
node server.js
# Open test.html via HTTP server
```

### Full MERN Projects (Q14, Q15, Q30)
```bash
# Terminal 1 - Backend
cd backend
npm install
node server.js

# Terminal 2 - Frontend
cd frontend
python3 -m http.server 8080
# Open http://localhost:8080
```

### React Projects (Q21, Q22)
```bash
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## Ports Used

- **3000** - Express APIs (Q9, Q10, Q13, Q24, Q25)
- **3001** - Express EJS (Q10 if Q9 running)
- **5000** - MERN backends (Q14, Q15, Q27, Q30)
- **8080** - Frontend HTTP server (Q14, Q15, Q21, Q22, Q30)
- **11264** - MySQL Aiven Cloud
- **27017** - MongoDB Atlas (cloud)

---

## Environment Variables

If needed, create `.env` file:

```env
# MongoDB
MONGODB_URI=mongodb+srv://user:pass@cluster.mongodb.net/dbname

# MySQL
MYSQL_HOST=host.com
MYSQL_PORT=11264
MYSQL_USER=user
MYSQL_PASSWORD=password
MYSQL_DATABASE=defaultdb

# Server
PORT=5000
```

---

## Testing APIs

### Using cURL
```bash
# GET request
curl http://localhost:3000/api/students

# POST request
curl -X POST http://localhost:3000/api/students \
  -H "Content-Type: application/json" \
  -d '{"name":"John","age":20}'

# PUT request
curl -X PUT http://localhost:3000/api/students/1 \
  -H "Content-Type: application/json" \
  -d '{"name":"Jane"}'

# DELETE request
curl -X DELETE http://localhost:3000/api/students/1
```

### Using Browser
- Open test.html files provided (via HTTP server)
- Use browser DevTools Network tab to see requests
- Use Postman or Insomnia for advanced testing
