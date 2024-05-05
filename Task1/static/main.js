let products = [
    { name: "Laptop", price: 999.99, description: "Powerful computing on the go" },
    { name: "Smartphone", price: 699.99, description: "Stay connected wherever you are" },
    { name: "Headphones", price: 149.99, description: "Immersive audio experience" }
];

function displayProducts() {
    let container = document.getElementById('container');

    products.forEach(product => {
        let productDiv = document.createElement('list');
        productDiv.innerHTML = `
        <h1>Here are your products!</h1>
        <h3>${product.name}</h3>
        <p>Price: $${product.price}</p>
        <p/>Description : ${product.description};
        `;
        container.appendChild(productDiv)
    });
}

displayProducts()

document.addEventListener("DOMContentLoaded", () => {
    alert('Here are your products');
})

