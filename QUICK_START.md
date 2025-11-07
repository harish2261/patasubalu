# Quick Start Guide - All 30 Lab Practicals

## ⚡ Quick Run Commands

### Q01-Q07: Basic HTML/CSS/JS & React (CDN)
```bash
# Simple - just open in browser
open Q01_Flexbox_Layout/index.html
open Q02_CSS_Grid_Layout/index.html
open Q03_Prime_Even_Odd/index.html
open Q04_Digital_Clock/index.html
open Q05_Form_Validation/index.html
open Q06_React_Counter/index.html
open Q07_React_Form/index.html
```

### Q08: Node Static Server
```bash
cd Q08_Node_Static_Server
npm install
node server.js
# Visit http://localhost:3000
```

### Q09: Express Student API (with Test UI)
```bash
cd Q09_Express_Student_API
npm install
node server.js &
open test.html  # Use HTTP server for test.html
```

### Q10: Express with EJS
```bash
cd Q10_Express_EJS
npm install
node server.js
# Visit http://localhost:3000
```

### Q11: MySQL CRUD
```bash
cd Q11_MySQL_CRUD
npm install
node server.js
# Check console output
```

### Q12: MongoDB CRUD
```bash
cd Q12_MongoDB_CRUD
npm install
node server.js
# Check console output
```

### Q13: MongoDB REST API (with Test UI)
```bash
# Terminal 1 - Backend
cd Q13_MongoDB_REST_API
npm install
node server.js

# Terminal 2 - Test UI
cd Q13_MongoDB_REST_API
python3 -m http.server 8080
# Open http://localhost:8080/test.html
```

### Q14: React + Express Integration
```bash
# Terminal 1 - Backend
cd Q14_React_Express_Integration/backend
npm install
node server.js

# Terminal 2 - Frontend
cd Q14_React_Express_Integration/frontend
python3 -m http.server 8080
# Open http://localhost:8080
```

### Q15: Full MERN CRUD
```bash
# Terminal 1 - Backend
cd Q15_MERN_CRUD/backend
npm install
node server.js

# Terminal 2 - Frontend
cd Q15_MERN_CRUD/frontend
python3 -m http.server 8080
# Open http://localhost:8080
```

### Q16-Q20: HTML/CSS/JS Projects
```bash
open Q16_Portfolio_CSS_Grid/index.html
open Q17_Flexbox_Responsive/index.html
open Q18_Palindrome_Checker/index.html
open Q19_Multiplication_Table/index.html
open Q20_Login_Validation/index.html
```

### Q21: React Student List
```bash
cd Q21_React_Student_List
python3 -m http.server 8080
# Open http://localhost:8080
```

### Q22: React API Fetch
```bash
cd Q22_React_API_Fetch
python3 -m http.server 8080
# Open http://localhost:8080
```

### Q23: Node File System
```bash
cd Q23_Node_File_System
node server.js
# Check console output
```

### Q24: Express Routes
```bash
cd Q24_Express_Routes
npm install
node server.js
# Visit http://localhost:3000
```

### Q25: Express EJS Products
```bash
cd Q25_Express_EJS_Products
npm install
node server.js
# Visit http://localhost:3000
```

### Q26: Path and OS Modules
```bash
cd Q26_Path_OS_Modules
node server.js
# Check console output
```

### Q27: Employee REST API
```bash
cd Q27_Employee_REST_API
npm install
node server.js
# Visit http://localhost:3000
```

### Q28: MySQL Update
```bash
cd Q28_MySQL_Update
npm install
node server.js
# Check console output
```

### Q29: MongoDB Products CRUD
```bash
cd Q29_MongoDB_Products
npm install
node server.js
# Check console output
```

### Q30: MERN Task List
```bash
# Terminal 1 - Backend
cd Q30_MERN_Task_List/backend
npm install
node server.js

# Terminal 2 - Frontend
cd Q30_MERN_Task_List/frontend
python3 -m http.server 8080
# Open http://localhost:8080
```

---

## 🔧 One-Time Setup

### Install All Dependencies (Run Once)
```bash
cd "MERN DATA"

# Install Node projects
for dir in Q08_Node_Static_Server Q09_Express_Student_API Q10_Express_EJS Q11_MySQL_CRUD Q12_MongoDB_CRUD Q13_MongoDB_REST_API Q24_Express_Routes Q25_Express_EJS_Products Q27_Employee_REST_API Q28_MySQL_Update Q29_MongoDB_Products; do
  cd "$dir" && npm install && cd ..
done

# Install MERN backends
cd Q14_React_Express_Integration/backend && npm install && cd ../..
cd Q15_MERN_CRUD/backend && npm install && cd ../..
cd Q30_MERN_Task_List/backend && npm install && cd ../..
```

---

## 📋 Project Categories

### Pure Frontend (Open directly)
- Q01-Q07: HTML/CSS/JS, React CDN
- Q16-Q20: HTML/CSS/JS

### Frontend with HTTP Server Needed
- Q21, Q22: React apps (CORS issues if opened directly)
- Q14, Q15, Q30: MERN frontends

### Backend Only (Console Output)
- Q11, Q12: Database CRUD operations
- Q23: File system operations
- Q26: Path/OS modules
- Q28, Q29: Database operations

### Full Stack (Backend + Test UI)
- Q09: Student API with test.html
- Q13: Books API with test.html

### Server Applications
- Q08: Static file server
- Q10, Q24, Q25, Q27: Express apps with routes

### Complete MERN
- Q14: React + Express
- Q15: Full MERN CRUD (Users)
- Q30: MERN Task List

---

## 🚀 Common Commands

### Kill Process on Port
```bash
lsof -ti:3000 | xargs kill -9
lsof -ti:5000 | xargs kill -9
lsof -ti:8080 | xargs kill -9
```

### Start HTTP Server
```bash
# Python (Built-in)
python3 -m http.server 8080

# Node.js
npx http-server -p 8080
```

### Test API with cURL
```bash
# GET
curl http://localhost:3000/api/endpoint

# POST
curl -X POST http://localhost:3000/api/endpoint \
  -H "Content-Type: application/json" \
  -d '{"key":"value"}'
```

---

## 🗂️ Database Configuration

All database projects are configured to use **cloud databases**:

### MongoDB Atlas
- Q12, Q13, Q15, Q29, Q30
- Connection string already configured
- No local MongoDB needed

### MySQL Aiven Cloud  
- Q11, Q28
- Connection configured with SSL
- No local MySQL needed

---

## 📝 Notes

1. **CORS Issues:** Always use HTTP server for React apps (Q14, Q15, Q21, Q22, Q30)
2. **Port Conflicts:** If port is busy, kill the process first
3. **Test UIs:** Q09 and Q13 have test.html files - open via HTTP server
4. **Cloud DBs:** All databases are cloud-based (MongoDB Atlas, MySQL Aiven)
5. **No Build Required:** React apps use CDN, no webpack/vite needed
