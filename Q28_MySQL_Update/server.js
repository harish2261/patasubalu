require('dotenv').config();
const mysql = require('mysql2');

const connection = mysql.createConnection({
    host: process.env.MYSQL_HOST,
    port: process.env.MYSQL_PORT,
    user: process.env.MYSQL_USER,
    password: process.env.MYSQL_PASSWORD,
    database: process.env.MYSQL_DATABASE,
    ssl: { rejectUnauthorized: false }
});

connection.connect((err) => {
    if (err) {
        console.error('❌ Error connecting to MySQL:', err);
        return;
    }
    console.log('✅ Connected to MySQL database!');
    setupAndRun();
});

async function setupAndRun() {
    try {
        await createProductsTable();
        await insertSampleProducts();
        await performUpdateOperations();
    } catch (error) {
        console.error('❌ Error:', error);
    } finally {
        connection.end(() => console.log('\n👋 Connection closed'));
    }
}

function createProductsTable() {
    const sql = `
        CREATE TABLE IF NOT EXISTS products (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            category VARCHAR(50),
            price DECIMAL(10, 2) NOT NULL,
            stock INT DEFAULT 0,
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
            updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
        )
    `;
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) reject(err);
            else {
                console.log('✅ Products table created\n');
                resolve(result);
            }
        });
    });
}

function insertSampleProducts() {
    const sql = `
        INSERT INTO products (name, category, price, stock) VALUES
        ('Laptop', 'Electronics', 999.99, 50),
        ('Mouse', 'Electronics', 29.99, 200),
        ('Keyboard', 'Electronics', 79.99, 150),
        ('Monitor', 'Electronics', 299.99, 75),
        ('Desk Chair', 'Furniture', 199.99, 30)
        ON DUPLICATE KEY UPDATE id=id
    `;
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, result) => {
            if (err) reject(err);
            else {
                console.log('✅ Sample products inserted\n');
                displayAllProducts().then(resolve);
            }
        });
    });
}

function displayAllProducts() {
    return new Promise((resolve, reject) => {
        connection.query('SELECT * FROM products', (err, results) => {
            if (err) reject(err);
            else {
                console.log('📦 All Products:');
                console.table(results);
                console.log('');
                resolve(results);
            }
        });
    });
}

async function performUpdateOperations() {
    console.log('🔹 UPDATE 1: Single price update');
    await updatePrice(1, 899.99);
    await displayAllProducts();

    console.log('🔹 UPDATE 2: Multiple fields');
    await updateProduct(2, { price: 24.99, stock: 250 });
    await displayAllProducts();

    console.log('🔹 UPDATE 3: Category discount');
    await applyDiscount('Electronics', 0.9);
    await displayAllProducts();

    console.log('✅ All UPDATE operations completed!');
}

function updatePrice(id, price) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE products SET price = ? WHERE id = ?', [price, id], (err, result) => {
            if (err) reject(err);
            else {
                console.log(`✅ Updated product ${id}\n`);
                resolve(result);
            }
        });
    });
}

function updateProduct(id, updates) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE products SET ? WHERE id = ?', [updates, id], (err, result) => {
            if (err) reject(err);
            else {
                console.log(`✅ Updated product ${id}\n`);
                resolve(result);
            }
        });
    });
}

function applyDiscount(category, multiplier) {
    return new Promise((resolve, reject) => {
        connection.query('UPDATE products SET price = price * ? WHERE category = ?', [multiplier, category], (err, result) => {
            if (err) reject(err);
            else {
                console.log(`✅ Applied discount to ${category}\n`);
                resolve(result);
            }
        });
    });
}
