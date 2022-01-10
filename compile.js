// Cross-platform compatible module to generate path between directories
const path = require('path');

// File system built-in package to read and write files
const fs = require('fs');

// Used to compile solidties files
const solc = require('solc');

// We need to create a path as we cannot directly require the .sol files as it will think it is a .js file
const inboxPath = path.resolve(__dirname, 'contracts', 'inbox.sol');
const source = fs.readFileSync(inboxPath, 'utf8');

// 1 indicates compile one contract
// Adding .contracts[':Inbox'] helps us get only the essential properties i.e., bytecode
// and interface which are present in the ':Inbox' key
module.exports = solc.compile(source, 1).contracts[':Inbox'];
