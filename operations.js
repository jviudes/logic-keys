const operations = new Map();
operations.set('AND', (a, b) => a && b);
operations.set('OR', (a, b) => a || b);
operations.set('XOR', (a, b) => a !== b);
operations.set('NAND', (a, b) => !(a && b));
operations.set('NOR', (a, b) => !(a || b));
operations.set('XNOR', (a, b) => a === b);

module.exports = operations;
