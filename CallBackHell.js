// Certainly! Callback Hell is a term used to describe a situation in JavaScript programming where there are multiple nested callbacks within callbacks, leading to deeply indented and hard-to-read code. It typically occurs when dealing with asynchronous operations that rely on the results of previous operations.

// In JavaScript, when performing asynchronous tasks, such as making API requests or reading files, it is common to use callbacks as a way to handle the results or errors. However, if you have multiple asynchronous operations that depend on each other, the code can quickly become tangled and difficult to manage.

// Here's an example to illustrate Callback Hell:

const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");
const heading3 = document.getElementById("heading3");
const heading4 = document.getElementById("heading4");
const heading5 = document.getElementById("heading5");
const heading6 = document.getElementById("heading6");
const heading7 = document.getElementById("heading7");
const heading8 = document.getElementById("heading8");
const heading9 = document.getElementById("heading9");
console.log(
  heading1,
  heading2,
  heading3,
  heading4,
  heading5,
  heading6,
  heading7,
  heading8,
  heading9
);

setTimeout(() => {
  heading1.textContent = "Hello World!";

  setTimeout(() => {
    heading2.textContent = "Hello World!";

    setTimeout(() => {
      heading3.textContent = "Hello World!";

      setTimeout(() => {
        heading4.textContent = "Hello World!";

        setTimeout(() => {
          heading5.textContent = "Hello World!";

          setTimeout(() => {
            heading6.textContent = "Hello World!";

            setTimeout(() => {
              heading7.textContent = "Hello World!";

              setTimeout(() => {
                heading8.textContent = "Hello World!";

                setTimeout(() => {
                  heading9.textContent = "Hello World!";
                }, 1000);
              }, 1000);
            }, 1000);
          }, 1000);
        }, 1000);
      }, 1000);
    }, 1000);
  }, 1000);
}, 1000);
