# Question 24: Express.js Routes

## Description
Develop an Express.js server that provides routes for /home, /about, and /contact, each returning an HTML message.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit the routes in your browser:
   - http://localhost:3000/ (Home)
   - http://localhost:3000/about
   - http://localhost:3000/contact

## Routes

### GET /
Home page with welcome message and navigation

### GET /about
About page with application information and features

### GET /contact
Contact page with contact information

### 404 Handler
Custom 404 page for undefined routes

## Features
- Express.js routing
- HTML responses with inline CSS
- Navigation between pages
- Unique styling for each route
- 404 error handling
- Console logging of available routes

## Technologies
- Express.js
- HTML5
- CSS3 (inline styles)
- Node.js
