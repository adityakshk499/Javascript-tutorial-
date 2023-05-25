// The fetch() function in JavaScript is used to make HTTP requests and retrieve resources from a specified URL. It returns a promise that resolves to the Response object representing the response to the request.

// Here is an example of using the fetch() function to make a GET request and retrieve data from a server:

// fetch('https://jsonplaceholder.typicode.com/posts').then((response)=>{
//     // console.log(response.json())
//     return response.json()
// }).then((response)=>{
//     console.log(response)
// })




//   In the above example, the fetch() function is called with the URL 'https://api.example.com/data'. It returns a promise, and we chain .then() methods to handle the response asynchronously. The first .then() callback converts the response to JSON format using the json() method of the Response object. Finally, the retrieved data is logged to the console.

// The fetch() function supports various options and configurations, such as specifying the request method, headers, request body, and more. It is commonly used for interacting with APIs and fetching data from servers in web applications.



// fetch('https://jsonplaceholder.typicode.com/posts')
//   .then(response => response.json())
//   .then(data => {
//     console.log(data); // Output the retrieved data
//   })
//   .catch(error => {
//     console.error('Error:', error);
//   });


// async await 

async function getPosts(){
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    const data = await response.json();
    console.log(data);
    return data;
}

getPosts() 