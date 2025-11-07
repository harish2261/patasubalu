const fs = require('fs');
const path = require('path');

const fileName = 'example.txt';
const filePath = path.join(__dirname, fileName);
const fileContent = 'Hello, this is sample content written to a file using Node.js fs module!\nThis demonstrates file operations in Node.js.';

console.log('📁 Node.js File System Operations\n');

// Step 1: Create and write to file
console.log('Step 1: Creating file and writing data...');
fs.writeFile(filePath, fileContent, 'utf8', (err) => {
    if (err) {
        console.error('❌ Error writing file:', err);
        return;
    }
    console.log(`✅ File '${fileName}' created successfully!`);
    console.log(`   Location: ${filePath}\n`);
    
    // Step 2: Read the file contents
    console.log('Step 2: Reading file contents...');
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) {
            console.error('❌ Error reading file:', err);
            return;
        }
        console.log('✅ File read successfully!\n');
        console.log('📄 File Contents:');
        console.log('─'.repeat(50));
        console.log(data);
        console.log('─'.repeat(50));
        
        // Step 3: Append more data
        console.log('\nStep 3: Appending more data to file...');
        const appendContent = '\nThis line was appended later!';
        fs.appendFile(filePath, appendContent, 'utf8', (err) => {
            if (err) {
                console.error('❌ Error appending to file:', err);
                return;
            }
            console.log('✅ Data appended successfully!\n');
            
            // Step 4: Read again to verify append
            console.log('Step 4: Reading updated file contents...');
            fs.readFile(filePath, 'utf8', (err, data) => {
                if (err) {
                    console.error('❌ Error reading file:', err);
                    return;
                }
                console.log('✅ Updated file read successfully!\n');
                console.log('📄 Updated File Contents:');
                console.log('─'.repeat(50));
                console.log(data);
                console.log('─'.repeat(50));
                
                // Step 5: Get file stats
                console.log('\nStep 5: Getting file information...');
                fs.stat(filePath, (err, stats) => {
                    if (err) {
                        console.error('❌ Error getting file stats:', err);
                        return;
                    }
                    console.log('✅ File Information:');
                    console.log(`   File Size: ${stats.size} bytes`);
                    console.log(`   Created: ${stats.birthtime}`);
                    console.log(`   Modified: ${stats.mtime}`);
                    console.log(`   Is File: ${stats.isFile()}`);
                    console.log(`   Is Directory: ${stats.isDirectory()}`);
                    
                    console.log('\n✅ All file operations completed successfully!');
                });
            });
        });
    });
});

// Demonstrate synchronous file operations
console.log('\n🔄 Demonstrating Synchronous Operations:\n');

const syncFileName = 'sync-example.txt';
const syncFilePath = path.join(__dirname, syncFileName);

try {
    // Synchronous write
    fs.writeFileSync(syncFilePath, 'This is written synchronously!', 'utf8');
    console.log(`✅ Synchronous write successful: ${syncFileName}`);
    
    // Synchronous read
    const syncData = fs.readFileSync(syncFilePath, 'utf8');
    console.log(`✅ Synchronous read successful: "${syncData}"`);
    
    // Check if file exists
    const exists = fs.existsSync(syncFilePath);
    console.log(`✅ File exists: ${exists}`);
    
} catch (err) {
    console.error('❌ Error in synchronous operations:', err);
}

console.log('\n' + '='.repeat(50));
console.log('Note: Check the current directory for created files:');
console.log(`  - ${fileName}`);
console.log(`  - ${syncFileName}`);
console.log('='.repeat(50));
