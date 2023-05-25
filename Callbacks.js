// Callbacks - When a function is taking a function as an argument , that function argument is called the callback 
// Such type of function is called High order function also.

// function myfirst(){
//     console.log('This is my first function')
// }

// function mysecond(){
//     console.log('This is my second function')
// }

// Suppose there two functions and i have to call both one by one 

// you can call them line by line or else you can call them one function inside another 

// myfirst()
// mysecond()

// This is my first function
// Callbacks.js:9 This is my second function

// instead of this you can also call one function inside another

// function myfirst(callbackFunction) {
//     console.log('This is my first function')
//     callbackFunction()
// }

// function mysecond(){
//     console.log('This is my second function')
// }


// myfirst(mysecond)

// Now See a Practical Example 

// function TakeTwoNumbersAddAndMultiply(number1,number2,addFunction,multiplyFunction) {
//     console.log(`The following two numbers are added and multiply - ${number1} and ${number2}`)
//     addFunction(number1,number2)
//     multiplyFunction(number1,number2)

// }

// function add(number1,number2){
//     var sum = number1 + number2
//     console.log(`The sum of the two numbers are ${sum}`)
// }


// function mul(number1,number2){
//     var multiply = number1 * number2
//     console.log(`The sum of the two numbers are ${multiply}`)
// }


// TakeTwoNumbersAddAndMultiply(2,5,add,mul)