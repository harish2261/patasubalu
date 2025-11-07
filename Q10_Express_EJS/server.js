const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as the template engine
app.set('view engine', 'ejs');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Sample data - array of items
const items = [
    { id: 1, name: 'Laptop', category: 'Electronics', price: 999.99, inStock: true },
    { id: 2, name: 'Headphones', category: 'Electronics', price: 149.99, inStock: true },
    { id: 3, name: 'Coffee Maker', category: 'Appliances', price: 79.99, inStock: false },
    { id: 4, name: 'Desk Chair', category: 'Furniture', price: 249.99, inStock: true },
    { id: 5, name: 'Notebook', category: 'Stationery', price: 4.99, inStock: true }
];

// Route to render items list
app.get('/', (req, res) => {
    res.render('index', {
        title: 'Product Catalog',
        items: items,
        totalItems: items.length
    });
});

// Route to show only in-stock items
app.get('/in-stock', (req, res) => {
    const inStockItems = items.filter(item => item.inStock);
    res.render('index', {
        title: 'In-Stock Products',
        items: inStockItems,
        totalItems: inStockItems.length
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📋 EJS template rendering items dynamically`);
});
