// select element using get element by id 

// console.log(document.getElementById('heading'))
// console.dir(document.getElementById('heading'))
// console.dir(typeof document.getElementById('heading'))
// const main = document.getElementById('heading')

// select element by querry selector 

// console.log(document.querySelector('h1'))
// console.dir(document.querySelector('h1'))
// console.dir(typeof document.querySelector('h1'))
// const main2 = document.querySelector('h1')

// query selector only gives one element if find more than one element 
// console.log(document.querySelector('h1'))
// console.dir(document.querySelector('h1'))
// console.dir(typeof document.querySelector('h1'))
// const main2 = document.querySelector('h1')


// query selector all 
// console.log(document.querySelectorAll('h1'))
// console.dir(document.querySelectorAll('h1'))
// console.dir(typeof document.querySelectorAll('h1'))
// const main2 = document.querySelectorAll('h1')

// change text 

// const mainHeading = document.getElementById('heading')
// console.log(mainHeading.textContent)
// mainHeading.textContent = 'Hello World'

//change color 

// const mainHeading = document.getElementById('heading')
// console.log(mainHeading.style.color)
// mainHeading.style.color = 'blue'
// console.log(mainHeading.style.color)

// get and set attribute 
// const hyperlink = document.getElementById('hyperlink')
// console.log(hyperlink.getAttribute('id'))
// hyperlink.setAttribute('href','https://www.google.com')


// getElemntsByClassName html collection just looks like array  that is lead to loop 

// const classList = document.getElementsByClassName('list')
// console.log(classList)
// for(let i = 0 ; i < classList.length; i++) {
// console.log(classList[i].style)
// classList[i].style.backgroundColor = 'blue'
// }

// get all class elements with querryselectorAll

// const classList1 = document.querySelectorAll('.list')
// console.log(classList1)
// for(let i = 0 ; i < classList1.length; i++) {
// console.log(classList1[i].style)
// classList1[i].style.backgroundColor = 'blue'
// }

// innerhtml

// var div =  document.getElementById('innerhtml')
// console.log(div.innerHTML)
// div.innerHTML += '<div>HEllo</div>'


// traversing DOM 

// const rootnode = document.getRootNode()
// console.log(rootnode)
// const childofroot = rootnode.childNodes
// console.log(childofroot)
// const HTML = childofroot[1].childNodes
// console.log(HTML)
// const head = HTML[0]
// const text = HTML[1]
// const body = HTML[2]
// console.log(head , text , body)
// console.log(text.nextSibling)
// const content  = body.childNodes
// body.style.color = 'blue'
// text will be ignore if we used .children rather than .childNodes 

// Show ClassList add class and remove class 

// const classexample = document.querySelector('#classexample')
// console.log(classexample)
// console.log(classexample.classList)
// console.log(classexample.classList.add('hero'))
// console.log(classexample.classList)

// console.log(classexample)
// console.log(classexample.classList.remove('hero'))
// console.log(classexample.classList)
// classexample.classList.toggle('hero')
// console.log(classexample.classList)

// const isthere = classexample.classList.contains('hero')
// console.log(isthere)

// innerhtml has a problem that it wil re render the whole elements again when you add a single element

// thats why if you want to add a element somewhere do this 

// const newElement = document.createElement('h1')
// newElement.textContent = 'Teach Students'
// const div = document.getElementById('append')
// div.append(newElement)
// const newElement2 = document.createElement('h1')
// newElement2.textContent = 'Teach Students 2'
// div.prepend(newElement2)


// cloning 

// const h1 = document.createElement('h1')
// h1.textContent = 'Teach'
// const h2 = document.createElement('h2')
// h2.textContent = 'Students'
// const div = document.getElementById('append')
// div.append(h1)
// let h11 = h1
// div.append(h11)
//  h11 = h1.cloneNode(true)
// div.append(h11)

// 2nd
// const btn = document.getElementById('btn')


// 3rd
// function click (){
//     console.log(this)
//     console.log("first")
// }
// btn.addEventListener('click',click)

// console.log(this)

// const allbtn = document.querySelectorAll('.allbtn button')

// function clickbtn (){
//     console.log(this)
//     console.log(this.textContent)
// }

// for(let btn of allbtn){
//     btn.addEventListener('click',clickbtn)
// }

// web api is giving us a event objet inside our function as an argument automatically that we can acces by writting any thing in our function as first argument 

// const btnFour = document.getElementById('four')

// btnFour.addEventListener('click', (event) => {
// //   console.log(event.target.textContent)
// })
