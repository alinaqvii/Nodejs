const path = require('path');

// Base File name
console.log(path.basename(__filename));

// Directory Name
console.log(path.basename(__dirname));

// File Extension
console.log(path.extname(__filename));

// Create path object
console.log(path.basename(__filename).base);

// Concatenate Path
console.log(path.join(__dirname, 'test', 'hello.html'));