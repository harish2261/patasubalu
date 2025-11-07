const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = 3000;

// CORS Middleware - Allow requests from any origin
app.use((req, res, next) => {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, OPTIONS');
    res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
        return res.sendStatus(200);
    }
    next();
});

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// MongoDB Connection - MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://gokulmicrosaas_db_user:kIdU5MG5Ie1xo9Gu@gokul123.xx43zbj.mongodb.net/librarydb?appName=gokul123';
mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch(err => console.error('❌ MongoDB connection error:', err));

// Book Schema
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    isbn: {
        type: String,
        required: true,
        unique: true
    },
    publishYear: {
        type: Number,
        required: true
    },
    genre: String,
    available: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Book Model
const Book = mongoose.model('Book', bookSchema);

// ROOT Route - API Documentation
app.get('/', (req, res) => {
    res.send(`
        <html>
            <head>
                <title>Books REST API</title>
                <style>
                    body { font-family: Arial; max-width: 900px; margin: 50px auto; padding: 20px; }
                    h1 { color: #333; }
                    .endpoint { background: #f4f4f4; padding: 15px; margin: 10px 0; border-radius: 5px; }
                    .method { color: white; padding: 5px 10px; border-radius: 3px; font-weight: bold; margin-right: 10px; }
                    .get { background: #61affe; }
                    .post { background: #49cc90; }
                    .put { background: #fca130; }
                    .delete { background: #f93e3e; }
                    code { background: #f0f0f0; padding: 2px 6px; border-radius: 3px; }
                </style>
            </head>
            <body>
                <h1>📚 Books REST API</h1>
                <p>MongoDB-backed REST API for managing books collection</p>
                
                <h2>Available Endpoints:</h2>
                
                <div class="endpoint">
                    <span class="method get">GET</span>
                    <strong>/api/books</strong> - Get all books
                </div>
                
                <div class="endpoint">
                    <span class="method get">GET</span>
                    <strong>/api/books/:id</strong> - Get a single book by ID
                </div>
                
                <div class="endpoint">
                    <span class="method post">POST</span>
                    <strong>/api/books</strong> - Create a new book<br>
                    <small>Body: { title, author, isbn, publishYear, genre }</small>
                </div>
                
                <div class="endpoint">
                    <span class="method put">PUT</span>
                    <strong>/api/books/:id</strong> - Update a book<br>
                    <small>Body: { title, author, isbn, publishYear, genre, available }</small>
                </div>
                
                <div class="endpoint">
                    <span class="method delete">DELETE</span>
                    <strong>/api/books/:id</strong> - Delete a book
                </div>
                
                <h3>Example Usage:</h3>
                <code>curl http://localhost:3000/api/books</code><br><br>
                <code>curl -X POST http://localhost:3000/api/books -H "Content-Type: application/json" -d '{"title":"1984","author":"George Orwell","isbn":"978-0451524935","publishYear":1949,"genre":"Dystopian"}'</code>
            </body>
        </html>
    `);
});

// CREATE - Add a new book
app.post('/api/books', async (req, res) => {
    try {
        const book = new Book(req.body);
        const savedBook = await book.save();
        res.status(201).json({
            success: true,
            message: 'Book created successfully',
            data: savedBook
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error creating book',
            error: error.message
        });
    }
});

// READ - Get all books
app.get('/api/books', async (req, res) => {
    try {
        const books = await Book.find();
        res.json({
            success: true,
            count: books.length,
            data: books
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching books',
            error: error.message
        });
    }
});

// READ - Get a single book by ID
app.get('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findById(req.params.id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        res.json({
            success: true,
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching book',
            error: error.message
        });
    }
});

// UPDATE - Update a book
app.put('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndUpdate(
            req.params.id,
            req.body,
            { new: true, runValidators: true }
        );
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        res.json({
            success: true,
            message: 'Book updated successfully',
            data: book
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: 'Error updating book',
            error: error.message
        });
    }
});

// DELETE - Delete a book
app.delete('/api/books/:id', async (req, res) => {
    try {
        const book = await Book.findByIdAndDelete(req.params.id);
        if (!book) {
            return res.status(404).json({
                success: false,
                message: 'Book not found'
            });
        }
        res.json({
            success: true,
            message: 'Book deleted successfully',
            data: book
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting book',
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📚 Books REST API is ready`);
});
