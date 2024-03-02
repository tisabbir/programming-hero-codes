const loadComment= ()=>  {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(json => console.log(json))
    .catch(error => console.error('Error Happened Bro. The error is => ', error),)
}

const  loadReplies = async() =>{

    try{
        const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json(); //json must be called always
    console.log(data)
    } catch(error){
        console.log('You got an error. Learn from it. This is your error =>', error);
    }
}