// Example JavaScript for home page
document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to KOB's LULU CLOTHING!");
});
// Example JavaScript for Add to Cart functionality
document.addEventListener("DOMContentLoaded", () => {
    // Add event listeners to all "Add to Cart" buttons
    const buttons = document.querySelectorAll(".add-to-cart");

    buttons.forEach(button => {
        button.addEventListener("click", (event) => {
            const productName = event.target.previousElementSibling.previousElementSibling.innerText;
            alert(`${productName} has been added to your cart!`);
        });
    });
});

// Form Validation for Contact Page
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector("form");

    form.addEventListener("submit", (event) => {
        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        if (!name || !email || !message) {
            alert("Please fill out all fields.");
            event.preventDefault();
        } else {
            alert("Your message has been sent!");
        }
    });
});

// Initialize cart as an empty array
let cart = [];

// Function to update the cart display
function updateCart() {
    const cartItemsContainer = document.querySelector('.cart-items');
    const totalPriceElement = document.getElementById('total-price');
    
    // Clear the cart items container
    cartItemsContainer.innerHTML = '';

    // Calculate total price
    let total = 0;
    
    cart.forEach(item => {
        // Create a div for each cart item
        const cartItem = document.createElement('div');
        cartItem.classList.add('cart-item');
        
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}" class="cart-item-image">
            <p class="cart-item-name">${item.name}</p>
            <p class="cart-item-price">$${item.price.toFixed(2)}</p>
            <p class="cart-item-quantity">Quantity: ${item.quantity}</p>
            <button class="remove-item" data-name="${item.name}">Remove</button>
        `;
        
        // Append the cart item to the container
        cartItemsContainer.appendChild(cartItem);

        // Update the total price
        total += item.price * item.quantity;
    });

    // Update the total price display
    totalPriceElement.textContent = total.toFixed(2);

    // Add event listeners to remove buttons
    document.querySelectorAll('.remove-item').forEach(button => {
        button.addEventListener('click', removeItemFromCart);
    });
}

// Function to add an item to the cart
function addItemToCart(name, price, image) {
    // Check if the item is already in the cart
    const existingItem = cart.find(item => item.name === name);

    if (existingItem) {
        // If item exists, increase quantity
        existingItem.quantity += 1;
    } else {
        // If item doesn't exist, add it to the cart
        cart.push({
            name: name,
            price: price,
            image: image,
            quantity: 1
        });
    }

    // Update the cart display
    updateCart();
}

// Function to remove an item from the cart
function removeItemFromCart(event) {
    const itemName = event.target.getAttribute('data-name');
    
    // Remove the item from the cart
    cart = cart.filter(item => item.name !== itemName);

    // Update the cart display
    updateCart();
}

// Add event listeners to "Add to Cart" buttons on the homepage
document.addEventListener("DOMContentLoaded", () => {
    // Product data (for demonstration purposes)
    const products = [
        { name: 'Stylish Shirt', price: 29.99, image: 'images/product1.jpg' },
        { name: 'Trendy Pants', price: 49.99, image: 'images/product2.jpg' },
        { name: 'Casual Shoes', price: 39.99, image: 'images/product3.jpg' }
    ];

    // Add event listeners to "Add to Cart" buttons on the homepage
    const buttons = document.querySelectorAll('.add-to-cart');
    buttons.forEach((button, index) => {
        button.addEventListener('click', () => {
            const product = products[index];
            addItemToCart(product.name, product.price, product.image);
        });
    });

    // Initially update the cart display
    updateCart();
});

// payment.js

// Sample cart items for demo purposes
const cartItems = [
    { name: "T-Shirt", price: 25.00 },
    { name: "Jeans", price: 40.00 },
    { name: "Sneakers", price: 60.00 }
];

// Display cart items and total price
function displayCart() {
    const cartSummary = document.getElementById("cart-summary");
    const totalPriceElement = document.getElementById("total-price");
    let totalPrice = 0;

    // Loop through cart items and display them
    cartItems.forEach(item => {
        const listItem = document.createElement("li");
        listItem.textContent = `${item.name} - $${item.price.toFixed(2)}`;
        cartSummary.appendChild(listItem);
        totalPrice += item.price;
    });

    // Display total price
    totalPriceElement.textContent = totalPrice.toFixed(2);
}

// Handle form submission
document.getElementById("payment-form").addEventListener("submit", function(event) {
    event.preventDefault();  // Prevent form from submitting normally

    // Show payment confirmation
    document.getElementById("payment-confirmation").style.display = "block";
    
    // Hide payment form
    document.getElementById("payment-form").style.display = "none";
});

// Initial setup
window.onload = displayCart;

