// In JavaScript, the break and continue statements are powerful tools for controlling the flow of loops. They allow you to alter the normal execution behavior of loops based on certain conditions. In this article, we will explore the break and continue statements in JavaScript, understand how they work, and discuss their practical applications.

// The break statement terminates the current loop entirely and transfers control to the statement immediately following the loop.
// The continue statement skips the remaining code in the current iteration of the loop and moves to the next iteration.

// When the break statement is encountered within a loop, it immediately exits the loop, regardless of whether the loop condition is still true or not. It allows you to prematurely terminate the loop and proceed with the next statement after the loop.

// for (let i = 0; i < 10; i++) {
//   if (i === 5) {
//     break; // Terminate the loop when i equals 5
//   }
//   console.log(i);
// }

// In this example, when the value of i becomes 5, the break statement is executed, and the loop is terminated. The output will be:

// 0
// 1
// 2
// 3
// 4


// The continue statement, unlike the break statement, doesn't terminate the loop entirely. Instead, it skips the remaining code within the current iteration and proceeds to the next iteration of the loop.

// for (let i = 0; i < 5; i++) {
//   if (i === 2) {
//     continue; // Skip the iteration when i equals 2
//   }
//   console.log(i);
// }

// In this example, when the value of i is 2, the continue statement is encountered, and the remaining code within that iteration is skipped. The output will be:

// 0
// 1
// 3
// 4


