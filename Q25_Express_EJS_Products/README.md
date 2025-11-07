# Question 25: Express.js with EJS Product Catalog

## Description
Use Express.js with EJS templates to display a product catalog where details are passed from the server.

## How to Run
1. Install dependencies:
   ```bash
   npm install
   ```
2. Start the server:
   ```bash
   npm start
   ```
3. Visit http://localhost:3000 in your browser

## Routes

### GET /
Displays all products in the catalog

### GET /product/:id
Displays details for a specific product (Note: template would need to be created)

### GET /category/:category
Filters products by category (e.g., /category/Electronics)

## Features
- EJS template engine
- Dynamic product rendering
- Product data passed from server to template
- Grid layout for products
- Category filtering
- Stock status indicators
- Responsive design
- Product images (placeholders)

## Product Data Structure
```javascript
{
    id: Number,
    name: String,
    brand: String,
    price: Number,
    category: String,
    inStock: Boolean,
    description: String,
    image: String
}
```

## Technologies
- Express.js
- EJS (Embedded JavaScript templates)
- CSS3 Grid
- Node.js
