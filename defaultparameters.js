// Default parameters are values assigned to function parameters when no argument or an undefined argument is passed during function invocation. These values act as fallbacks and are used when the corresponding arguments are not provided explicitly. Default parameters allow functions to handle missing or undefined values gracefully.
// The syntax for defining default parameters in JavaScript is as follows:
function functionName(parameter = defaultValue) {
  // Function body
}

// The parameter represents the name of the parameter, and defaultValue represents the default value assigned to the parameter.

// Default parameters are useful when you want to provide a default value for a parameter if no value is passed during function invocation. For example:

function greet(name = "Anonymous") {
  console.log(`Hello, ${name}!`);
}

greet(); // Output: Hello, Anonymous!
greet("John"); // Output: Hello, John!

// In this example, the name parameter has a default value of "Anonymous". If no value is passed for name, it will default to the assigned value.
