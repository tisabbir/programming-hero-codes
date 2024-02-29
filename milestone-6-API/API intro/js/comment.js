function loadComment() {
    fetch('https://jsonplaceholder.typicode.com/comments')
    .then(res => res.json())
    .then(json => console.log(json));
}

const  loadReplies = async() =>{

    const res = await fetch('https://jsonplaceholder.typicode.com/comments');
    const data = await res.json(); //json must be called always
    console.log(data)
}