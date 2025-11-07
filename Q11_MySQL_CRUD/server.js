require('dotenv').config();
const mysql = require('mysql2');

// Create connection using environment variables
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
        console.error('Error connecting to MySQL:', err);
        return;
    }
    console.log('✅ Connected to MySQL database!');
    performCRUDOperations();
});

function createTable() {
    const createTableSQL = `
        CREATE TABLE IF NOT EXISTS students (
            id INT AUTO_INCREMENT PRIMARY KEY,
            name VARCHAR(100) NOT NULL,
            email VARCHAR(100) UNIQUE NOT NULL,
            age INT,
            course VARCHAR(50),
            created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
        )
    `;

    return new Promise((resolve, reject) => {
        connection.query(createTableSQL, (err, result) => {
            if (err) {
                console.error('❌ Error creating table:', err);
                reject(err);
            } else {
                console.log('✅ Table created or already exists');
                resolve(result);
            }
        });
    });
}

function createStudent(name, email, age, course) {
    const sql = 'INSERT INTO students (name, email, age, course) VALUES (?, ?, ?, ?)';
    return new Promise((resolve, reject) => {
        connection.query(sql, [name, email, age, course], (err, result) => {
            if (err) {
                console.error('❌ Error inserting student:', err.message);
                reject(err);
            } else {
                console.log(`✅ Student inserted with ID: ${result.insertId}`);
                resolve(result);
            }
        });
    });
}

function getAllStudents() {
    const sql = 'SELECT * FROM students';
    return new Promise((resolve, reject) => {
        connection.query(sql, (err, results) => {
            if (err) {
                console.error('❌ Error fetching students:', err);
                reject(err);
            } else {
                console.log('\n📚 All Students:');
                console.table(results);
                resolve(results);
            }
        });
    });
}

function getStudentById(id) {
    const sql = 'SELECT * FROM students WHERE id = ?';
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (err, results) => {
            if (err) {
                console.error('❌ Error fetching student:', err);
                reject(err);
            } else {
                console.log(`\n📖 Student with ID ${id}:`);
                console.table(results);
                resolve(results);
            }
        });
    });
}

function updateStudent(id, updates) {
    const sql = 'UPDATE students SET ? WHERE id = ?';
    return new Promise((resolve, reject) => {
        connection.query(sql, [updates, id], (err, result) => {
            if (err) {
                console.error('❌ Error updating student:', err);
                reject(err);
            } else {
                console.log(`✅ Student with ID ${id} updated. Rows affected: ${result.affectedRows}`);
                resolve(result);
            }
        });
    });
}

function deleteStudent(id) {
    const sql = 'DELETE FROM students WHERE id = ?';
    return new Promise((resolve, reject) => {
        connection.query(sql, [id], (err, result) => {
            if (err) {
                console.error('❌ Error deleting student:', err);
                reject(err);
            } else {
                console.log(`✅ Student with ID ${id} deleted. Rows affected: ${result.affectedRows}`);
                resolve(result);
            }
        });
    });
}

async function performCRUDOperations() {
    try {
        await createTable();

        console.log('\n🔹 CREATE Operations:');
        await createStudent('John Doe', 'john@example.com', 20, 'Computer Science');
        await createStudent('Jane Smith', 'jane@example.com', 22, 'Mathematics');
        await createStudent('Bob Johnson', 'bob@example.com', 21, 'Physics');

        console.log('\n🔹 READ Operations:');
        await getAllStudents();
        await getStudentById(1);

        console.log('\n🔹 UPDATE Operations:');
        await updateStudent(1, { age: 21, course: 'Data Science' });
        await getStudentById(1);

        console.log('\n🔹 DELETE Operations:');
        await deleteStudent(3);
        await getAllStudents();

        console.log('\n✅ All CRUD operations completed successfully!');
    } catch (error) {
        console.error('❌ Error in CRUD operations:', error);
    } finally {
        connection.end(() => console.log('\n👋 Connection closed'));
    }
}
