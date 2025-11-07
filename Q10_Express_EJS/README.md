# Question 10: Express.js with EJS Templates

## Description
Create an Express.js app using EJS to render a list of items dynamically from an array passed from the server.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Open browser and visit: http://localhost:3000
4. Try the "In Stock Only" link to see filtered results

## Features
- Express.js web framework
- EJS template engine
- Dynamic data rendering from server
- Array iteration in templates
- Conditional rendering
- Multiple routes
- Styled responsive table layout
- Navigation between views

## Project Structure
```
Q10_Express_EJS/
├── server.js          # Express server with routes
├── views/
│   └── index.ejs     # EJS template file
├── package.json
└── README.md
```

## EJS Features Demonstrated
- `<%= %>` - Output escaped content
- `<% %>` - Control flow (loops, conditionals)
- Passing data from server to template
- Array iteration with forEach
- Conditional rendering (if/else)
