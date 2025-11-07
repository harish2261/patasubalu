# Question 26: Path and OS Modules

## Description
Write a Node.js program using the path and os modules to display file path information and operating system details.

## How to Run
```bash
node server.js
```

## PATH Module Operations

### Methods Demonstrated
1. `path.basename()` - Get filename from path
2. `path.dirname()` - Get directory name
3. `path.extname()` - Get file extension
4. `path.parse()` - Parse path into object
5. `path.format()` - Format path object to string
6. `path.join()` - Join path segments
7. `path.resolve()` - Resolve to absolute path
8. `path.relative()` - Get relative path
9. `path.normalize()` - Normalize a path
10. `path.isAbsolute()` - Check if absolute path
11. `path.sep` - Path separator
12. `path.delimiter` - Path delimiter

## OS Module Operations

### System Information Displayed
1. Platform (darwin, win32, linux, etc.)
2. OS Type (Darwin, Windows_NT, Linux)
3. OS Release version
4. CPU Architecture (x64, arm64, etc.)
5. Hostname
6. Home directory
7. Temp directory
8. CPU information (count, model, speed)
9. Total system memory
10. Free memory
11. System uptime
12. User information
13. Network interfaces
14. Load average
15. Endianness

## Output
The program displays:
- File path operations and manipulations
- Complete system information
- Memory usage statistics
- CPU details
- Network configuration
- System summary

## Technologies
- Node.js
- path module (built-in)
- os module (built-in)
