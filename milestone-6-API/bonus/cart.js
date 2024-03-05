const addProduct = () => {
     const productName = document.getElementById('product-name');
     const productQuantity= document.getElementById('product-quantity');

     const product = productName.value;
     const quantity = productQuantity.value;

     console.log(product , quantity)

     productName.value = '';
     productQuantity.value = '';


     const productContainer = document.getElementById('productContainer');

const displayProducts = () => {
    const li = document.createElement('li');
    li.innerText = product + ' '  + quantity;

    productContainer.appendChild(li);
}
     displayProducts()
}

const productContainer = document.getElementById('productContainer');

