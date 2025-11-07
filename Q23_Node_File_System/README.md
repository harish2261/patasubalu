# Question 23: Node.js File System Operations

## Description
Build a Node.js program using the fs module to create a file, write data into it, and read the contents back.

## How to Run
```bash
node server.js
```

## What the Program Does
1. **Creates a file** named `example.txt`
2. **Writes data** to the file
3. **Reads the contents** and displays them
4. **Appends more data** to the file
5. **Reads updated contents**
6. **Gets file statistics** (size, dates, etc.)
7. **Demonstrates synchronous operations** with a second file

## File Operations Demonstrated

### Asynchronous Operations
- `fs.writeFile()` - Create and write to file
- `fs.readFile()` - Read file contents
- `fs.appendFile()` - Append data to existing file
- `fs.stat()` - Get file information

### Synchronous Operations
- `fs.writeFileSync()` - Synchronous write
- `fs.readFileSync()` - Synchronous read
- `fs.existsSync()` - Check if file exists

## Features
- Both asynchronous and synchronous file operations
- Error handling for all operations
- File statistics (size, creation date, modification date)
- Colored console output with emojis
- Creates two example files for demonstration

## Files Created
After running, you'll find:
- `example.txt` - Created with async operations
- `sync-example.txt` - Created with sync operations

## Technologies
- Node.js
- fs (File System) module
- path module
- Callback pattern (async)
- Synchronous operations
