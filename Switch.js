// The syntax of the switch statement in JavaScript is as follows:

// switch (expression) {
//   case value1:
//     // code block
//     break;
//   case value2:
//     // code block
//     break;
//   // more cases...
//   default:
//     // code block
// }

// Case statements are used to define the different conditions to compare against the expression. Here's an example:

let day = "Monday";
switch (day) {
  case "Monday":
    console.log("It's the beginning of the week.");
    break;
  case "Friday":
    console.log("It's almost the weekend.");
    break;
  default:
    console.log("It's an ordinary day.");
}
// The default statement is optional and is executed when none of the cases match the expression. It acts as a catch-all for any values not explicitly handled by the case statements. Here's an example:
// In this example, since fruit is "Apple" and there is no corresponding case, the code block within the default statement will execute, logging "It's an unknown fruit." to the console.