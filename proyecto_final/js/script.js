// Sample product data
const products = [
    { id: 1, name: 'Arroz', price: 2500 },
    { id: 2, name: 'Frijoles', price: 3000 },
    { id: 3, name: 'Aceite', price: 22000 },
    { id: 4, name: 'Leche', price: 4000 }
];

// Variables
const productList = document.getElementById('product-list');
const cartBtn = document.getElementById('cart-btn');
const cart = document.getElementById('cart');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const checkoutBtn = document.getElementById('checkout-btn');

// Event listeners
cartBtn.addEventListener('click', toggleCart);
checkoutBtn.addEventListener('click', checkout);

// Generate product list
function generateProductList() {
    productList.innerHTML = '';
    products.forEach(product => {
        const productItem = document.createElement('div');
        productItem.classList.add('product');
        productItem.innerHTML = `
            <h3>${product.name}</h3>
            <p>Precio: $${product.price.toFixed(2)}</p>
            <button onclick="addToCart(${product.id})">Agregar al Carrito</button>
        `;
        productList.appendChild(productItem);
    });
}

// Add product to cart
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    const cartItem = document.createElement('li');
    cartItem.innerHTML = `${product.name} - $${product.price.toFixed(2)}`;
    cartItems.appendChild(cartItem);
    updateCartTotal();
}

// Update cart total
function updateCartTotal() {
    let total = 0;
    cartItems.querySelectorAll('li').forEach(item => {
        total += parseFloat(item.textContent.split('$')[1]);
    });
    cartTotal.textContent = total.toFixed(2);
}

// Toggle cart visibility
function toggleCart() {
    cart.classList.toggle('hidden');
}

// Checkout
function checkout() {
    alert('¡Gracias por su compra!');
    cartItems.innerHTML = '';
    updateCartTotal();
}

// Initialize
generateProductList();