// console.log('script started')

// setTimeout(()=>{
//     console.log('hello')
// } ,0)



// console.log('script started')


// when ever settimeout is present in our code , our browser will take care of it , and send to callback queue which send the such type of things to stack once the gec is cleared 


console.log('script started')

const id = setTimeout(()=>{
    console.log('hello')
} ,0)

const id1= setTimeout(()=>{
    console.log('hello')
} ,0)

const id2= setTimeout(()=>{
    console.log('hello')
} ,0)

const id3= setTimeout(()=>{
    console.log('hello')
} ,0)

const id4= setTimeout(()=>{
    console.log('hello')
} ,0)


console.log(id)
console.log(id1)
console.log(id2)
console.log(id3)
console.log(id4)

clearTimeout(id)

// settimeout will return us a id , that can be used to clear the timeout 




console.log('script started')

