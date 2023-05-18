// Functions inside functions refer to the practice of defining one or more functions within the body of another function. These inner functions have access to the variables and parameters of the outer function, creating a hierarchical structure. This nesting allows for modular and encapsulated code organization.

// To create a function inside another function, you simply define the inner function within the body of the outer function. Here's an example:

function outerFunction() {
  // Outer function code

  function innerFunction() {
    // Inner function code
  }

  // More outer function code
}


// In this example, the innerFunction is defined within the outerFunction. The inner function is only accessible within the scope of the outer function.

// Scopes and access to variable - 

function outerFunction() {
  const outerVariable = "Hello";

  function innerFunction() {
    console.log(outerVariable);
  }

  innerFunction(); // Output: Hello
}

outerFunction();

// In this example, the inner function innerFunction can access the outerVariable declared in the outer function outerFunction. The value of outerVariable is accessible within the inner function.

// Returning Function from another function - 

// Functions inside functions can also be used to return other functions. This concept, known as a higher-order function, allows for the creation of functions on the fly or the creation of functions with different behaviors based on input.
function greet(name) {
  function sayHello() {
    console.log(`Hello, ${name}!`);
  }

  return sayHello;
}

const greetJohn = greet("John");
greetJohn(); // Output: Hello, John!
// In this example, the greet function returns the inner function sayHello. The returned function can then be assigned to a variable and executed independently.

// Closures and Function inside Function - 
// Functions inside functions play a crucial role in creating closures. A closure is formed when an inner function retains access to the variables and parameters of its outer function, even after the outer function has finished executing.

function outerFunction() {
  const message = "Hello";

  function innerFunction() {
    console.log(message);
  }

  return innerFunction;
}

const inner = outerFunction();
inner(); // Output: Hello

// In this example, the inner function innerFunction retains access to the message variable of the outer function outerFunction, even after the outer function has completed execution. This behavior is possible due to closures.
