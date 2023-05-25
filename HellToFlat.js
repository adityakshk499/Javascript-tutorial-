const heading1 = document.getElementById("heading1");
const heading2 = document.getElementById("heading2");
const heading3 = document.getElementById("heading3");
const heading4 = document.getElementById("heading4");
const heading5 = document.getElementById("heading5");
const heading6 = document.getElementById("heading6");
const heading7 = document.getElementById("heading7");
const heading8 = document.getElementById("heading8");
const heading9 = document.getElementById("heading9");

function HellToFlat(element){
    return new Promise((resolve , reject) =>{
        if(element){
            setTimeout(() => {
                element.textContent = "Hello, world!";
                resolve(`Text change of the given element -  $(element) is changed`);
            }, 1000);
        }
        else{
            reject('error occured')
        }
    })
}


HellToFlat(heading1).then(()=>  HellToFlat(heading2))
.then(()=>  HellToFlat(heading3))
.then(()=>  HellToFlat(heading4))
.then(()=>  HellToFlat(heading5))
.then(()=>  HellToFlat(heading6))
.then(()=>  HellToFlat(heading7))
.then(()=>  HellToFlat(heading8))
.then(()=>  HellToFlat(heading9)).catch((err)=>{
    console.log(err)
})