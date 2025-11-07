const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// MongoDB Connection - MongoDB Atlas
const MONGODB_URI = 'mongodb+srv://gokulmicrosaas_db_user:kIdU5MG5Ie1xo9Gu@gokul123.xx43zbj.mongodb.net/tasksdb?appName=gokul123';

mongoose.connect(MONGODB_URI)
    .then(() => console.log('✅ Connected to MongoDB'))
    .catch((err) => console.error('❌ MongoDB connection error:', err));

// Task Schema
const taskSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        trim: true
    },
    completed: {
        type: Boolean,
        default: false
    },
    priority: {
        type: String,
        enum: ['Low', 'Medium', 'High'],
        default: 'Medium'
    },
    createdAt: {
        type: Date,
        default: Date.now
    }
});

// Task Model
const Task = mongoose.model('Task', taskSchema);

// Routes

// CREATE - Add a new task
app.post('/api/tasks', async (req, res) => {
    try {
        const { title, description, priority } = req.body;
        
        if (!title) {
            return res.status(400).json({
                success: false,
                message: 'Title is required'
            });
        }
        
        const newTask = new Task({
            title,
            description,
            priority
        });
        
        await newTask.save();
        
        res.status(201).json({
            success: true,
            message: 'Task created successfully',
            data: newTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error creating task',
            error: error.message
        });
    }
});

// READ - Get all tasks
app.get('/api/tasks', async (req, res) => {
    try {
        const tasks = await Task.find().sort({ createdAt: -1 });
        
        res.json({
            success: true,
            count: tasks.length,
            data: tasks
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching tasks',
            error: error.message
        });
    }
});

// READ - Get a single task
app.get('/api/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findById(req.params.id);
        
        if (!task) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        res.json({
            success: true,
            data: task
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error fetching task',
            error: error.message
        });
    }
});

// UPDATE - Update a task
app.put('/api/tasks/:id', async (req, res) => {
    try {
        const { title, description, completed, priority } = req.body;
        
        const updatedTask = await Task.findByIdAndUpdate(
            req.params.id,
            { title, description, completed, priority },
            { new: true, runValidators: true }
        );
        
        if (!updatedTask) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        res.json({
            success: true,
            message: 'Task updated successfully',
            data: updatedTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error updating task',
            error: error.message
        });
    }
});

// DELETE - Delete a task
app.delete('/api/tasks/:id', async (req, res) => {
    try {
        const deletedTask = await Task.findByIdAndDelete(req.params.id);
        
        if (!deletedTask) {
            return res.status(404).json({
                success: false,
                message: 'Task not found'
            });
        }
        
        res.json({
            success: true,
            message: 'Task deleted successfully',
            data: deletedTask
        });
    } catch (error) {
        res.status(500).json({
            success: false,
            message: 'Error deleting task',
            error: error.message
        });
    }
});

// Start server
app.listen(PORT, () => {
    console.log(`✅ Server running on http://localhost:${PORT}`);
    console.log(`📝 Task API ready`);
});
