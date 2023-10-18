const products = [
    { id: 1, name: 'Product 1', description: 'Description of Product 1', price: 599 },
    { id: 2, name: 'Product 2', description: 'Description of Product 2', price: 999 },
    { id: 3, name: 'Product 3', description: 'Description of Product 3', price: 49999 },
    { id: 4, name: 'Product 4', description: 'Description of Product 4', price: 1599 },
    { id: 5, name: 'Product 5', description: 'Description of Product 5', price: 2999 }
];

const cartItems = [];
const cartTotalElement = document.getElementById('cart-total');
const cartItemsElement = document.getElementById('cart-items');

function updateCartDisplay() {
    cartItemsElement.innerHTML = '';

    let total = 0;

    cartItems.forEach(item => {
        const cartItem = document.createElement('li');
        cartItem.textContent = `${products[item.productId - 1].name} - $${products[item.productId - 1].price}`;
        cartItemsElement.appendChild(cartItem);
        total += products[item.productId - 1].price;
    });

    cartTotalElement.textContent = total.toFixed(2);
}

function addToCart(productId) {
    const newItem = { productId: productId };
    cartItems.push(newItem);
    updateCartDisplay();
}

// Display products and cart when the page loads
displayProducts();
updateCartDisplay();

