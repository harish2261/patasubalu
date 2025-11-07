# Question 29: MongoDB Products CRUD

## Description
Perform CRUD operations in MongoDB using Mongoose for a collection named products.

## Prerequisites
- MongoDB Atlas cloud database (configured)
- Node.js installed

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Run the program:
   ```bash
   npm start
   ```

## Database Configuration
Using MongoDB Atlas:
- **Cluster:** gokul123
- **Database:** productsdb
- **Collection:** products

## CRUD Operations Performed

### 1. CREATE (Insert)
- Inserts 4 product documents using `insertMany()`
- Products include laptops, smartphones, headphones, and accessories

### 2. READ (Find)
- `find()` - Retrieves all products
- `find({ category })` - Finds products by category
- `find({ stock: { $gt: 10 } })` - Finds products with stock > 10

### 3. UPDATE
- `updateOne()` - Updates a single product's price and stock
- `updateMany()` - Bulk updates (10% price increase for accessories)
- Uses MongoDB operators: `$set`, `$mul`

### 4. DELETE
- `deleteOne()` - Removes a specific product from collection

### 5. Additional Operations
- `countDocuments()` - Counts total products and by category
- `aggregate()` - Calculates average price by category
- Advanced queries with comparison operators

## Product Schema
```javascript
{
    name: String (required),
    category: String (required),
    price: Number (required),
    stock: Number (default: 0),
    brand: String,
    description: String,
    inStock: Boolean (default: true),
    createdAt: Date (default: now)
}
```

## MongoDB Operators Used
- `$gt` - Greater than
- `$set` - Set field values
- `$mul` - Multiply field value
- `$avg` - Calculate average
- `$sum` - Sum values
- `$group` - Group documents

## Features
- Complete CRUD operations
- Mongoose ODM
- Schema validation
- Query operators
- Bulk operations
- Aggregation pipeline
- Document counting
- Comprehensive error handling

## Technologies
- Node.js
- MongoDB
- Mongoose
- Async/Await
