const express = require('express');
const app = express();
const PORT = 3000;

// Set EJS as template engine
app.set('view engine', 'ejs');

// Sample product data
const products = [
    {
        id: 1,
        name: 'Laptop',
        brand: 'TechPro',
        price: 999.99,
        category: 'Electronics',
        inStock: true,
        description: 'High-performance laptop with 16GB RAM',
        image: 'https://via.placeholder.com/300x200/667eea/ffffff?text=Laptop'
    },
    {
        id: 2,
        name: 'Smartphone',
        brand: 'MobileTech',
        price: 699.99,
        category: 'Electronics',
        inStock: true,
        description: '5G enabled smartphone with amazing camera',
        image: 'https://via.placeholder.com/300x200/4ecdc4/ffffff?text=Phone'
    },
    {
        id: 3,
        name: 'Wireless Headphones',
        brand: 'AudioMax',
        price: 149.99,
        category: 'Accessories',
        inStock: false,
        description: 'Noise-cancelling wireless headphones',
        image: 'https://via.placeholder.com/300x200/f7971e/ffffff?text=Headphones'
    },
    {
        id: 4,
        name: 'Smart Watch',
        brand: 'WearTech',
        price: 299.99,
        category: 'Wearables',
        inStock: true,
        description: 'Fitness tracking smart watch',
        image: 'https://via.placeholder.com/300x200/ff6b6b/ffffff?text=Watch'
    },
    {
        id: 5,
        name: 'Tablet',
        brand: 'TechPro',
        price: 449.99,
        category: 'Electronics',
        inStock: true,
        description: '10-inch tablet perfect for work and play',
        image: 'https://via.placeholder.com/300x200/98d8c8/ffffff?text=Tablet'
    },
    {
        id: 6,
        name: 'Bluetooth Speaker',
        brand: 'AudioMax',
        price: 79.99,
        category: 'Accessories',
        inStock: true,
        description: 'Portable waterproof bluetooth speaker',
        image: 'https://via.placeholder.com/300x200/bb8fce/ffffff?text=Speaker'
    }
];

// Route - Product catalog
app.get('/', (req, res) => {
    res.render('catalog', {
        title: 'Product Catalog',
        products: products,
        totalProducts: products.length
    });
});

// Route - Single product details
app.get('/product/:id', (req, res) => {
    const product = products.find(p => p.id === parseInt(req.params.id));
    if (product) {
        res.render('product-details', {
            title: product.name,
            product: product
        });
    } else {
        res.status(404).send('Product not found');
    }
});

// Route - Products by category
app.get('/category/:category', (req, res) => {
    const category = req.params.category;
    const filteredProducts = products.filter(
        p => p.category.toLowerCase() === category.toLowerCase()
    );
    res.render('catalog', {
        title: `${category} Products`,
        products: filteredProducts,
        totalProducts: filteredProducts.length
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server is running on http://localhost:${PORT}`);
    console.log(`📦 Product catalog is ready`);
});
