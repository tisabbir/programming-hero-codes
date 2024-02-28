console.log('index file added')

function loadUsers2(){
    // console.log('btn handled')

    fetch('https://jsonplaceholder.typicode.com/users')
        .then(response => response.json())
        .then(json => displayUser(json));
}

function displayUser(json){
    const ul = document.getElementById('item-list');
    for(let user of json){
        let list = document.createElement('li');
    list.innerText = user.name;
    ul.appendChild(list);
    
    }

    
}