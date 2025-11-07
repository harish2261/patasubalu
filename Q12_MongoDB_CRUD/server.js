const mongoose = require('mongoose');

// MongoDB connection string - MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://gokulmicrosaas_db_user:kIdU5MG5Ie1xo9Gu@gokul123.xx43zbj.mongodb.net/studentdb?appName=gokul123';

// Connect to MongoDB
mongoose.connect(MONGODB_URI)
    .then(() => {
        console.log('✅ Connected to MongoDB');
        performCRUDOperations();
    })
    .catch((err) => {
        console.error('❌ Error connecting to MongoDB:', err);
    });

// Define Student Schema
const studentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    age: {
        type: Number,
        required: true
    },
    course: {
        type: String,
        required: true
    },
    enrollmentDate: {
        type: Date,
        default: Date.now
    }
});

// Create Student Model
const Student = mongoose.model('Student', studentSchema);

// CRUD Operations
async function performCRUDOperations() {
    try {
        // 1. CREATE - Insert students
        console.log('\n📝 CREATE Operation:');
        const newStudents = await Student.insertMany([
            { name: 'Alice Johnson', email: 'alice@example.com', age: 20, course: 'Computer Science' },
            { name: 'Bob Smith', email: 'bob@example.com', age: 22, course: 'Engineering' },
            { name: 'Charlie Brown', email: 'charlie@example.com', age: 21, course: 'Mathematics' }
        ]);
        console.log(`✅ Inserted ${newStudents.length} students`);
        
        // 2. READ - Find all students
        console.log('\n📖 READ Operation - All Students:');
        const allStudents = await Student.find();
        allStudents.forEach((student, index) => {
            console.log(`\nStudent ${index + 1}:`);
            console.log(`  Name: ${student.name}`);
            console.log(`  Email: ${student.email}`);
            console.log(`  Age: ${student.age}`);
            console.log(`  Course: ${student.course}`);
        });
        
        // 3. UPDATE - Update a student
        console.log('\n✏️  UPDATE Operation:');
        const updateResult = await Student.updateOne(
            { email: 'alice@example.com' },
            { $set: { age: 21, course: 'Data Science' } }
        );
        console.log(`✅ Updated ${updateResult.modifiedCount} student(s)`);
        
        // Verify update
        const updatedStudent = await Student.findOne({ email: 'alice@example.com' });
        console.log('Updated Student:', {
            name: updatedStudent.name,
            age: updatedStudent.age,
            course: updatedStudent.course
        });
        
        // 4. DELETE - Delete a student
        console.log('\n🗑️  DELETE Operation:');
        const deleteResult = await Student.deleteOne({ email: 'charlie@example.com' });
        console.log(`✅ Deleted ${deleteResult.deletedCount} student(s)`);
        
        // 5. FIND - Find students with specific criteria
        console.log('\n🔍 FIND Operation - Students age >= 21:');
        const filteredStudents = await Student.find({ age: { $gte: 21 } });
        filteredStudents.forEach((student) => {
            console.log(`  - ${student.name} (Age: ${student.age})`);
        });
        
        // Final count
        const totalCount = await Student.countDocuments();
        console.log(`\n📊 Total students in database: ${totalCount}`);
        
    } catch (error) {
        console.error('❌ Error performing CRUD operations:', error);
    } finally {
        // Close connection
        await mongoose.connection.close();
        console.log('\n✅ MongoDB connection closed');
    }
}
