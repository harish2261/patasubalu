# Question 13: MongoDB REST API

## Description
Develop an Express.js REST API connected to MongoDB for performing CRUD operations on a "books" collection.

## Prerequisites
- MongoDB Atlas cloud database (configured)
- Node.js installed

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit http://localhost:3000

## Database Configuration
Using MongoDB Atlas:
- **Cluster:** gokul123
- **Database:** librarydb
- **Collection:** books

## API Endpoints

### Create a Book
```bash
POST /api/books
Content-Type: application/json

{
  "title": "1984",
  "author": "George Orwell",
  "isbn": "978-0451524935",
  "publishYear": 1949,
  "genre": "Dystopian"
}
```

### Get All Books
```bash
GET /api/books
```

### Get Single Book
```bash
GET /api/books/:id
```

### Update a Book
```bash
PUT /api/books/:id
Content-Type: application/json

{
  "title": "Updated Title",
  "available": false
}
```

### Delete a Book
```bash
DELETE /api/books/:id
```

## Testing with cURL

```bash
# Create a book
curl -X POST http://localhost:3000/api/books \
  -H "Content-Type: application/json" \
  -d '{"title":"To Kill a Mockingbird","author":"Harper Lee","isbn":"978-0061120084","publishYear":1960,"genre":"Fiction"}'

# Get all books
curl http://localhost:3000/api/books

# Get single book (replace ID)
curl http://localhost:3000/api/books/BOOK_ID

# Update a book (replace ID)
curl -X PUT http://localhost:3000/api/books/BOOK_ID \
  -H "Content-Type: application/json" \
  -d '{"available":false}'

# Delete a book (replace ID)
curl -X DELETE http://localhost:3000/api/books/BOOK_ID
```

## Features
- Full CRUD operations
- MongoDB with Mongoose
- RESTful API design
- Input validation
- Error handling
- JSON responses
- API documentation page

## Book Schema
```javascript
{
  title: String (required),
  author: String (required),
  isbn: String (required, unique),
  publishYear: Number (required),
  genre: String,
  available: Boolean (default: true),
  createdAt: Date (default: now)
}
```
