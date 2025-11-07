# Question 8: Node.js Static Server

## Description
Build a Node.js application using the http module to serve a static HTML file as a response to a client request.

## How to Run
1. Install Node.js if not already installed
2. Navigate to this directory in terminal
3. Run the command:
   ```bash
   node server.js
   ```
4. Open your browser and visit: http://localhost:3000
5. Press Ctrl+C in terminal to stop the server

## Features
- Built-in Node.js `http` module
- Serves static HTML file
- File system (fs) module to read HTML file
- Error handling for file reading
- 404 handling for unknown routes
- Console logging for requests

## Code Highlights
- `http.createServer()` creates the server
- `fs.readFile()` reads the HTML file
- Proper HTTP headers and status codes
- Port 3000 for local development
