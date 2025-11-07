const http = require('http');
const fs = require('fs');
const path = require('path');

const PORT = 3000;
const HTML_FILE = path.join(__dirname, 'index.html');

// Create HTTP server
const server = http.createServer((req, res) => {
    console.log(`Request received: ${req.method} ${req.url}`);
    
    if (req.url === '/' || req.url === '/index.html') {
        // Read the HTML file
        fs.readFile(HTML_FILE, 'utf8', (err, data) => {
            if (err) {
                res.writeHead(500, { 'Content-Type': 'text/plain' });
                res.end('Error reading file');
                console.error('Error reading file:', err);
                return;
            }
            
            // Send HTML response
            res.writeHead(200, { 'Content-Type': 'text/html' });
            res.end(data);
        });
    } else {
        // 404 for other routes
        res.writeHead(404, { 'Content-Type': 'text/plain' });
        res.end('404 - Page Not Found');
    }
});

// Start the server
server.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
    console.log(`Serving static HTML file: ${HTML_FILE}`);
    console.log('Press Ctrl+C to stop the server');
});
