function mypromise() {
  const learnJS = ["Attendence", "Concentration", "DOM", "Manupulation"];
  return new Promise(function (resolve, reject) {
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
}

mypromise()
  .then((response) => {
    console.log(response);
    
  })
  .catch((err) => {
    console.log(err);
  });


// then chaining 

mypromise()
.then((response) => {
  console.log(response);
  response += 'Now learn React' 
  return response;
}).then((response) => {
    console.log(response);
})
.catch((err) => {
  console.log(err);
});
