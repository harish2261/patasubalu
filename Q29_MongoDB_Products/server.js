const mongoose = require('mongoose');

// MongoDB connection string - MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://gokulmicrosaas_db_user:kIdU5MG5Ie1xo9Gu@gokul123.xx43zbj.mongodb.net/productsdb?appName=gokul123';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        performCRUDOperations();
    })
    .catch((err) => {
        console.error('❌ Error connecting to MongoDB:', err);
    });

// Define Product Schema
const productSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    stock: {
        type: Number,
        default: 0
    },
    brand: String,
    description: String,
    inStock: {
        type: Boolean,
        default: true
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Create Product Model
const Product = mongoose.model('Product', productSchema);

// CRUD Operations
async function performCRUDOperations() {
    try {
        // 1. CREATE - Insert products
        console.log('\n📝 CREATE Operation:');
        console.log('='.repeat(60));
        
        const newProducts = await Product.insertMany([
            {
                name: 'Laptop',
                category: 'Electronics',
                price: 999.99,
                stock: 15,
                brand: 'TechPro',
                description: 'High-performance laptop',
                inStock: true
            },
            {
                name: 'Wireless Mouse',
                category: 'Accessories',
                price: 29.99,
                stock: 50,
                brand: 'TechPro',
                description: 'Ergonomic wireless mouse',
                inStock: true
            },
            {
                name: 'Smartphone',
                category: 'Electronics',
                price: 699.99,
                stock: 25,
                brand: 'MobileTech',
                description: '5G enabled smartphone',
                inStock: true
            },
            {
                name: 'Headphones',
                category: 'Accessories',
                price: 149.99,
                stock: 0,
                brand: 'AudioMax',
                description: 'Noise-cancelling headphones',
                inStock: false
            }
        ]);
        
        console.log(`✅ Inserted ${newProducts.length} products`);
        
        // 2. READ - Find all products
        console.log('\n📖 READ Operation - All Products:');
        console.log('='.repeat(60));
        
        const allProducts = await Product.find();
        allProducts.forEach((product, index) => {
            console.log(`\nProduct ${index + 1}:`);
            console.log(`  Name: ${product.name}`);
            console.log(`  Category: ${product.category}`);
            console.log(`  Price: $${product.price}`);
            console.log(`  Stock: ${product.stock}`);
            console.log(`  Brand: ${product.brand}`);
            console.log(`  In Stock: ${product.inStock ? 'Yes' : 'No'}`);
        });
        
        // 3. FIND with conditions
        console.log('\n🔍 FIND Operation - Electronics Category:');
        console.log('='.repeat(60));
        
        const electronics = await Product.find({ category: 'Electronics' });
        console.log(`Found ${electronics.length} electronics products:`);
        electronics.forEach((product) => {
            console.log(`  - ${product.name}: $${product.price}`);
        });
        
        // 4. FIND - Products in stock
        console.log('\n🔍 FIND Operation - In Stock Products (stock > 10):');
        console.log('='.repeat(60));
        
        const inStockProducts = await Product.find({ stock: { $gt: 10 } });
        console.log(`Found ${inStockProducts.length} products with stock > 10:`);
        inStockProducts.forEach((product) => {
            console.log(`  - ${product.name}: ${product.stock} units`);
        });
        
        // 5. UPDATE - Update a product
        console.log('\n✏️  UPDATE Operation:');
        console.log('='.repeat(60));
        
        const updateResult = await Product.updateOne(
            { name: 'Laptop' },
            {
                $set: {
                    price: 899.99,
                    stock: 20,
                    description: 'High-performance laptop - SALE!'
                }
            }
        );
        
        console.log(`✅ Updated ${updateResult.modifiedCount} product(s)`);
        
        const updatedProduct = await Product.findOne({ name: 'Laptop' });
        console.log('Updated Product:');
        console.log(`  Name: ${updatedProduct.name}`);
        console.log(`  New Price: $${updatedProduct.price}`);
        console.log(`  New Stock: ${updatedProduct.stock}`);
        console.log(`  Description: ${updatedProduct.description}`);
        
        // 6. UPDATE MANY - Increase prices by 10%
        console.log('\n✏️  UPDATE MANY Operation - 10% Price Increase:');
        console.log('='.repeat(60));
        
        const bulkUpdateResult = await Product.updateMany(
            { category: 'Accessories' },
            {
                $mul: { price: 1.1 } // Multiply price by 1.1 (10% increase)
            }
        );
        
        console.log(`✅ Updated ${bulkUpdateResult.modifiedCount} accessories`);
        
        const updatedAccessories = await Product.find({ category: 'Accessories' });
        console.log('Updated Accessories Prices:');
        updatedAccessories.forEach((product) => {
            console.log(`  - ${product.name}: $${product.price.toFixed(2)}`);
        });
        
        // 7. DELETE - Delete a product
        console.log('\n🗑️  DELETE Operation:');
        console.log('='.repeat(60));
        
        const deleteResult = await Product.deleteOne({ name: 'Headphones' });
        console.log(`✅ Deleted ${deleteResult.deletedCount} product(s)`);
        
        // 8. COUNT documents
        console.log('\n📊 COUNT Operation:');
        console.log('='.repeat(60));
        
        const totalProducts = await Product.countDocuments();
        const totalElectronics = await Product.countDocuments({ category: 'Electronics' });
        const totalAccessories = await Product.countDocuments({ category: 'Accessories' });
        
        console.log(`Total Products: ${totalProducts}`);
        console.log(`Electronics: ${totalElectronics}`);
        console.log(`Accessories: ${totalAccessories}`);
        
        // 9. AGGREGATION - Average price by category
        console.log('\n📈 AGGREGATION - Average Price by Category:');
        console.log('='.repeat(60));
        
        const avgPrices = await Product.aggregate([
            {
                $group: {
                    _id: '$category',
                    avgPrice: { $avg: '$price' },
                    count: { $sum: 1 }
                }
            }
        ]);
        
        avgPrices.forEach((result) => {
            console.log(`  ${result._id}: $${result.avgPrice.toFixed(2)} (${result.count} products)`);
        });
        
        // Final Summary
        console.log('\n\n📊 Final Summary:');
        console.log('='.repeat(60));
        const finalProducts = await Product.find();
        console.log(`Total Products in Database: ${finalProducts.length}`);
        console.log('\nRemaining Products:');
        finalProducts.forEach((product, index) => {
            console.log(`${index + 1}. ${product.name} - $${product.price.toFixed(2)} (${product.stock} in stock)`);
        });
        console.log('='.repeat(60));
        
    } catch (error) {
        console.error('❌ Error performing CRUD operations:', error);
    } finally {
        // Close connection
        await mongoose.connection.close();
        console.log('\n✅ MongoDB connection closed');
    }
}
