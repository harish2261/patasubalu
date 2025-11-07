const path = require('path');
const os = require('os');

console.log('='.repeat(60));
console.log('🔧 Node.js PATH and OS Modules Demonstration');
console.log('='.repeat(60));

// ==================== PATH MODULE ====================
console.log('\n📁 PATH MODULE OPERATIONS:\n');

const filePath = '/Users/john/documents/projects/app.js';

console.log('Original Path:', filePath);
console.log('-'.repeat(60));

// 1. path.basename() - Get the last portion of a path
console.log('1. basename():', path.basename(filePath));
console.log('   basename (without ext):', path.basename(filePath, '.js'));

// 2. path.dirname() - Get the directory name
console.log('\n2. dirname():', path.dirname(filePath));

// 3. path.extname() - Get the file extension
console.log('\n3. extname():', path.extname(filePath));

// 4. path.parse() - Parse a path into an object
console.log('\n4. parse():');
const parsedPath = path.parse(filePath);
console.log('   Root:', parsedPath.root);
console.log('   Dir:', parsedPath.dir);
console.log('   Base:', parsedPath.base);
console.log('   Name:', parsedPath.name);
console.log('   Ext:', parsedPath.ext);

// 5. path.format() - Format a path object
console.log('\n5. format():');
const formattedPath = path.format({
    root: '/Users/',
    dir: '/Users/john',
    base: 'file.txt'
});
console.log('   Formatted:', formattedPath);

// 6. path.join() - Join all arguments together
console.log('\n6. join():');
const joinedPath = path.join('/users', 'john', 'documents', 'file.txt');
console.log('   Joined:', joinedPath);

// 7. path.resolve() - Resolve to an absolute path
console.log('\n7. resolve():');
const resolvedPath = path.resolve('documents', 'projects', 'app.js');
console.log('   Resolved:', resolvedPath);

// 8. path.relative() - Get relative path
console.log('\n8. relative():');
const relativePath = path.relative('/users/john/documents', '/users/john/pictures/photo.jpg');
console.log('   Relative:', relativePath);

// 9. path.normalize() - Normalize a path
console.log('\n9. normalize():');
const normalizedPath = path.normalize('/users/john/../mary/./documents');
console.log('   Normalized:', normalizedPath);

// 10. path.isAbsolute() - Check if path is absolute
console.log('\n10. isAbsolute():');
console.log('    "/users/john":', path.isAbsolute('/users/john'));
console.log('    "documents/file.txt":', path.isAbsolute('documents/file.txt'));

// 11. path.sep - Platform-specific path separator
console.log('\n11. Path Separator:', path.sep);

// 12. path.delimiter - Platform-specific path delimiter
console.log('12. Path Delimiter:', path.delimiter);

// ==================== OS MODULE ====================
console.log('\n\n💻 OS MODULE OPERATIONS:\n');
console.log('='.repeat(60));

// 1. os.platform() - Operating system platform
console.log('1. Platform:', os.platform());

// 2. os.type() - Operating system name
console.log('\n2. OS Type:', os.type());

// 3. os.release() - Operating system release
console.log('\n3. OS Release:', os.release());

// 4. os.arch() - Operating system CPU architecture
console.log('\n4. Architecture:', os.arch());

// 5. os.hostname() - Hostname
console.log('\n5. Hostname:', os.hostname());

// 6. os.homedir() - Home directory
console.log('\n6. Home Directory:', os.homedir());

// 7. os.tmpdir() - Temp directory
console.log('\n7. Temp Directory:', os.tmpdir());

// 8. os.cpus() - CPU information
console.log('\n8. CPU Information:');
const cpus = os.cpus();
console.log('   Number of CPUs:', cpus.length);
console.log('   Model:', cpus[0].model);
console.log('   Speed:', cpus[0].speed, 'MHz');

// 9. os.totalmem() - Total system memory
console.log('\n9. Total Memory:', (os.totalmem() / (1024 ** 3)).toFixed(2), 'GB');

// 10. os.freemem() - Free system memory
console.log('\n10. Free Memory:', (os.freemem() / (1024 ** 3)).toFixed(2), 'GB');

// 11. os.uptime() - System uptime
const uptimeSeconds = os.uptime();
const uptimeHours = (uptimeSeconds / 3600).toFixed(2);
console.log('\n11. System Uptime:', uptimeHours, 'hours');

// 12. os.userInfo() - User information
console.log('\n12. User Information:');
const userInfo = os.userInfo();
console.log('    Username:', userInfo.username);
console.log('    Home Dir:', userInfo.homedir);
console.log('    Shell:', userInfo.shell);

// 13. os.networkInterfaces() - Network interfaces
console.log('\n13. Network Interfaces:');
const networkInterfaces = os.networkInterfaces();
Object.keys(networkInterfaces).forEach((interfaceName) => {
    console.log(`    ${interfaceName}:`);
    networkInterfaces[interfaceName].forEach((net) => {
        if (net.family === 'IPv4') {
            console.log(`      - IPv4: ${net.address}`);
        }
    });
});

// 14. os.loadavg() - Load average
console.log('\n14. Load Average:', os.loadavg());

// 15. os.endianness() - Endianness
console.log('\n15. Endianness:', os.endianness());

// Memory usage percentage
const totalMem = os.totalmem();
const freeMem = os.freemem();
const usedMem = totalMem - freeMem;
const memUsagePercent = ((usedMem / totalMem) * 100).toFixed(2);

console.log('\n\n📊 System Summary:');
console.log('='.repeat(60));
console.log(`Platform: ${os.platform()} (${os.arch()})`);
console.log(`CPUs: ${cpus.length} x ${cpus[0].model}`);
console.log(`Total Memory: ${(totalMem / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Used Memory: ${(usedMem / (1024 ** 3)).toFixed(2)} GB (${memUsagePercent}%)`);
console.log(`Free Memory: ${(freeMem / (1024 ** 3)).toFixed(2)} GB`);
console.log(`Uptime: ${uptimeHours} hours`);
console.log('='.repeat(60));
