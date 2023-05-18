// A function expression is a way to define a function as a part of an expression. Unlike function declarations, which are hoisted to the top of their scope, function expressions are evaluated at runtime. They are useful when you want to assign a function to a variable or use it as an argument to another function.

// The syntax for a function expression in JavaScript is as follows:

// const functionName = function(parameters) { // Function body };

const greet = function(name) {
  console.log(`Hello, ${name}!`);
};

greet("John"); // Output: Hello, John!

// Function expressions provide a powerful and flexible way to define functions in JavaScript.
