// Arrow functions are a shorthand syntax for writing functions in JavaScript. They are called arrow functions because of the arrow-like => operator used to define them. Arrow functions have a more concise syntax compared to regular functions and provide some unique features and behavior.

// The syntax for arrow functions in JavaScript is as follows:
const functionName = (parameter1, parameter2) => {
  // Function body
};

// The functionName is an optional name given to the function.
// Parameters are enclosed in parentheses ().
// The arrow => separates the parameter list from the function body.
// The function body is enclosed in curly braces {}.

// Arrow function return implicit Function - 

// Arrow functions with a single expression can omit the curly braces {} and the return keyword, providing an implicit return of the expression.

const double = number => number * 2;

console.log(double(5)); // Output: 10

// In this example, the arrow function double takes a number parameter and implicitly returns the result of multiplying it by 2.
