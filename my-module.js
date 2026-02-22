// my-module.js - A simple custom module
exports.myFunction = function() {
  return 'Hello from my custom module!';
};

exports.greet = function(name) {
  return `Hello, ${name}! Welcome to Node.js modules.`;
};

exports.add = function(a, b) {
  return a + b;
};
