// const oddEvenForm = document.getElementById('oddEvenForm');
// console.log(oddEvenForm)
// oddEvenForm.addEventListener('submit', function(event){
//    event.preventDefault()
//    let value = document.getElementById('number');

//    const number =  + value.value
//    if(number%2===0){
//     alert(`${number} is even`)
//    }
//    else if(number%2===1){
//     alert(`${number} is odd`)
//    }
//    else{
//     alert(`invalid input`)
//    }
   
// })


const personalia = document.getElementById('personalia');
// console.log(personalia)
personalia.addEventListener('submit',function(event){
    event.preventDefault();
    let fname = document.getElementById('fname').value
    let lname = document.getElementById('lname').value
    let email = document.getElementById('email').value
    let birthday = document.getElementById('birthday').value
    console.log(fname,lname,email,birthday)
  
})