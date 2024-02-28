fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => displayPost(json))

function displayPost(posts){

    // console.log(posts)
    const postContainer = document.getElementById('postContainer');
    
    for(let post of posts){
        console.log(post)
        const postDescription = document.createElement('div')
        postDescription.innerHTML = `
         <h4> Title : ${post.title} </h4>
         <p> Post : ${post.body} </p>
        `

        postContainer.appendChild(postDescription);
    }
}