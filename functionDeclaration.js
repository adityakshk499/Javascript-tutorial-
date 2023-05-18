// In JavaScript, a function is a named block of code that performs a specific task or calculates a value. Functions enable code reuse, organization, and modularity. They can be called or invoked whenever needed, and they can accept input parameters and return values.
// The syntax for declaring a function in JavaScript is as follows:

function functionName(parameter1, parameter2) {
  // Code to be executed
  // Optionally, return a value
}




// The function keyword is used to declare a function.
// functionName is the name given to the function.
// Parameters are enclosed in parentheses ().
// The code to be executed is enclosed in curly braces {}.

// Parameters are variables defined in the function declaration that represent the values passed into the function. Arguments, on the other hand, are the actual values passed into the function when it is called. When a function is invoked, the arguments are assigned to the corresponding parameters.

function greet(name) {
  console.log(`Hello, ${name}!`);
}

greet("John"); // Output: Hello, John!

// In this example, name is a parameter, and when the greet function is called with the argument "John", it prints "Hello, John!" to the console.

// Functions can also return values using the return keyword. The returned value can be assigned to a variable or used in further computations.

function add(a, b) {
  return a + b;
}

const result = add(2, 3);
console.log(result); // Output: 5

// In this example, the add function takes two parameters a and b and returns their sum. The returned value is then stored in the result variable and printed to the console.

// Function Hoisting - 
// One important concept to note is function hoisting. In JavaScript, function declarations are hoisted, which means they are moved to the top of their containing scope during the compilation phase. This allows you to call a function before its actual declaration in the code.

greet("Jane");

function greet(name) {
  console.log(`Hello, ${name}!`);
}

// In this example, the greet function is invoked before its declaration, thanks to function hoisting. The output will be "Hello, Jane!".
