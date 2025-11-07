const express = require('express');
const app = express();
const PORT = 3000;

// Home route
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Home Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 50px auto;
                        padding: 20px;
                        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                        min-height: 100vh;
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    }
                    h1 {
                        color: #667eea;
                        text-align: center;
                    }
                    p {
                        color: #666;
                        line-height: 1.8;
                        margin: 20px 0;
                    }
                    nav {
                        background: #f4f4f4;
                        padding: 20px;
                        border-radius: 8px;
                        margin-top: 30px;
                    }
                    nav a {
                        display: inline-block;
                        margin: 10px;
                        padding: 10px 20px;
                        background: #667eea;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        transition: background 0.3s;
                    }
                    nav a:hover {
                        background: #5568d3;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>🏠 Home Page</h1>
                    <p>Welcome to the Express.js routing demo! This is the home page of our application.</p>
                    <p>Use the navigation links below to explore different routes:</p>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </body>
        </html>
    `);
});

// About route
app.get('/about', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>About Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 50px auto;
                        padding: 20px;
                        background: linear-gradient(135deg, #4ecdc4 0%, #44a08d 100%);
                        min-height: 100vh;
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    }
                    h1 {
                        color: #4ecdc4;
                        text-align: center;
                    }
                    p {
                        color: #666;
                        line-height: 1.8;
                        margin: 20px 0;
                    }
                    nav {
                        background: #f4f4f4;
                        padding: 20px;
                        border-radius: 8px;
                        margin-top: 30px;
                    }
                    nav a {
                        display: inline-block;
                        margin: 10px;
                        padding: 10px 20px;
                        background: #4ecdc4;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        transition: background 0.3s;
                    }
                    nav a:hover {
                        background: #44a08d;
                    }
                    .features {
                        background: #f9f9f9;
                        padding: 20px;
                        border-radius: 8px;
                        margin: 20px 0;
                    }
                    .features li {
                        margin: 10px 0;
                        color: #555;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>ℹ️ About This Application</h1>
                    <p>This is a simple Express.js application demonstrating routing functionality.</p>
                    <div class="features">
                        <h3>Features:</h3>
                        <ul>
                            <li>Multiple routes (/home, /about, /contact)</li>
                            <li>HTML responses with styling</li>
                            <li>Navigation between pages</li>
                            <li>Express.js framework</li>
                        </ul>
                    </div>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </body>
        </html>
    `);
});

// Contact route
app.get('/contact', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Contact Page</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 800px;
                        margin: 50px auto;
                        padding: 20px;
                        background: linear-gradient(135deg, #f7971e 0%, #ffd200 100%);
                        min-height: 100vh;
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    }
                    h1 {
                        color: #f7971e;
                        text-align: center;
                    }
                    p {
                        color: #666;
                        line-height: 1.8;
                        margin: 20px 0;
                    }
                    nav {
                        background: #f4f4f4;
                        padding: 20px;
                        border-radius: 8px;
                        margin-top: 30px;
                    }
                    nav a {
                        display: inline-block;
                        margin: 10px;
                        padding: 10px 20px;
                        background: #f7971e;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        transition: background 0.3s;
                    }
                    nav a:hover {
                        background: #e68900;
                    }
                    .contact-info {
                        background: #f9f9f9;
                        padding: 20px;
                        border-radius: 8px;
                        margin: 20px 0;
                    }
                    .contact-info p {
                        margin: 10px 0;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>📧 Contact Us</h1>
                    <p>Get in touch with us through the following channels:</p>
                    <div class="contact-info">
                        <p><strong>📧 Email:</strong> contact@example.com</p>
                        <p><strong>📱 Phone:</strong> +1 (555) 123-4567</p>
                        <p><strong>📍 Address:</strong> 123 Express Street, Node City, JS 12345</p>
                        <p><strong>🕐 Hours:</strong> Monday - Friday, 9:00 AM - 5:00 PM</p>
                    </div>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/contact">Contact</a>
                    </nav>
                </div>
            </body>
        </html>
    `);
});

// 404 handler
app.use((req, res) => {
    res.status(404).send(`
        <html>
            <head>
                <title>404 - Page Not Found</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        max-width: 600px;
                        margin: 100px auto;
                        padding: 20px;
                        text-align: center;
                        background: #f44336;
                        min-height: 100vh;
                    }
                    .container {
                        background: white;
                        padding: 40px;
                        border-radius: 15px;
                        box-shadow: 0 10px 30px rgba(0, 0, 0, 0.3);
                    }
                    h1 {
                        color: #f44336;
                        font-size: 4rem;
                    }
                    p {
                        color: #666;
                        margin: 20px 0;
                    }
                    a {
                        display: inline-block;
                        padding: 10px 20px;
                        background: #f44336;
                        color: white;
                        text-decoration: none;
                        border-radius: 5px;
                        margin-top: 20px;
                    }
                    a:hover {
                        background: #da190b;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>404</h1>
                    <p>Oops! The page you're looking for doesn't exist.</p>
                    <a href="/">Go Home</a>
                </div>
            </body>
        </html>
    `);
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log('\nAvailable routes:');
    console.log(`  🏠 http://localhost:${PORT}/`);
    console.log(`  ℹ️  http://localhost:${PORT}/about`);
    console.log(`  📧 http://localhost:${PORT}/contact`);
});
