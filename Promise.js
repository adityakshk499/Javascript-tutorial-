const learnJS = ["Attendence", "Concentration", "DOM", "Manupulation"];

// Produce a Promise

const promises = new Promise((resolve, reject) => {
  if (
    learnJS.includes("Attendence") &&
    learnJS.includes("Concentration") &&
    learnJS.includes("DOM") &&
    learnJS.includes("Manupulation")
  ) {
    resolve("Congrats you learned js");
  } else {
    reject("Aww! you missed something");
  }
});

console.log(promises);

// Consumption of promise

promises
  .then((response) => {
    console.log(response);
  })
  .catch((err) => {
    console.log(err);
  });
