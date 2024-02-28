// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))

function loadData(){
    const url = 'https://jsonplaceholder.typicode.com/todos/1';

fetch(url) //Analogy : I am sending Suhaib to the Daraz Delivery point to get my product, he get it if there is no problem, he receives a token from the Daraz Delivery point and  then he sends back the token to me

    .then(response => response.json()) //.json is like JSON.parse but not 100% similar
    //Analogy : then method gets the token as response returned by previous function and convert it into json parse object
    //the token is not accessible , so we convert the token into a box
    //I receive the box and unpack the box and get out the contents from it
    .then(json => console.log(json))
    //Analogy : this then get the contents extracted earlier, and decide what to do with the contents
}