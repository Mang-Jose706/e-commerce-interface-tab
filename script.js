// Product Class Definition
class Product {
    constructor(id, name, price, image, category) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.image = image;
        this.category = category;
    }
}

// Constant Array of Products
const PRODUCTS = [
    new Product(1, "Type-A Uniform", 1000, "typeA.png", "Uniforms"),
    new Product(2, "Type-B Uniform", 900, "typeB.png", "Uniforms"),
    new Product(3, "Plain T_shirts", 300, "tshirt.png", "Clothing"),
    new Product(4, "Customized T-shirts", 450, "t-shirt.png", "Clothing"),
    new Product(5, "Formal Shoes", 1500, "dress-shoes.png", "Footwear"),
    new Product(6, "Sports Shoes", 1300, "shoes.png", "Footwear"),
    new Product(7, "Customized ID laces", 180, "lanyard.png", "Accessories"),
    new Product(8, "Socks", 120, "socks.png", "Clothing"),
    new Product(9, "Sports Pants", 550, "ski-pant.png", "Clothing"),
    new Product(10, "Black Pants", 600, "fashion.png", "Clothing"),
    new Product(11, "Togas", 750, "gown.png", "Uniforms"),
    new Product(12, "Umbrellas", 280, "umbrella.png", "Accessories"),
    new Product(13, "Caps", 220, "cap.png", "Accessories"),
    new Product(14, "Handkerchiefs", 110, "handkerchief.png", "Accessories"),
    new Product(15, "Bags", 700, "school-bag.png", "Accessories"),
    new Product(16, "Tumblers", 260, "gym.png", "Accessories")
];

// Cart State - Array to hold selected items
let cart = [];

function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
}

function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
        try {
            cart = JSON.parse(storedCart);
        } catch (error) {
            cart = [];
            console.warn('Failed to parse cart from localStorage:', error);
        }
    }
}

function renderFeaturedProducts() {
    const featuredGrid = document.querySelector('#featured-grid');
    if (!featuredGrid) return;

    // Select featured products (first 4)
    const featured = PRODUCTS.slice(0, 4);
    featuredGrid.innerHTML = '';

    featured.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-image';

        const h3 = document.createElement('h3');
        h3.className = 'product-name';
        h3.textContent = product.name;

        const priceP = document.createElement('p');
        priceP.className = 'product-price';
        priceP.textContent = `Price: PHP ${product.price}`;

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'niga';

        const viewBtn = document.createElement('a');
        viewBtn.href = '#';
        viewBtn.className = 'btn btn-secondary';
        viewBtn.textContent = 'View Details';

        const cartBtn = document.createElement('button');
        cartBtn.type = 'button';
        cartBtn.className = 'btn btn-primary add-to-cart-btn';
        cartBtn.textContent = 'Add to Cart';
        cartBtn.setAttribute('data-id', product.id);

        buttonDiv.appendChild(viewBtn);
        buttonDiv.appendChild(cartBtn);

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(priceP);
        card.appendChild(buttonDiv);

        featuredGrid.appendChild(card);
    });
}

function renderDiscountedProducts() {
    const discountedGrid = document.querySelector('#discounted-grid');
    if (!discountedGrid) return;

    // Select discounted products (middle 4 products)
    const discounted = PRODUCTS.slice(4, 8);
    discountedGrid.innerHTML = '';

    discounted.forEach(product => {
        const card = document.createElement('article');
        card.className = 'product-card';

        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-image';

        const h3 = document.createElement('h3');
        h3.className = 'product-name';
        h3.textContent = product.name;

        const priceP = document.createElement('p');
        priceP.className = 'product-price';
        priceP.textContent = `Price: PHP ${product.price}`;

        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'niga';

        const viewBtn = document.createElement('a');
        viewBtn.href = '#';
        viewBtn.className = 'btn btn-secondary';
        viewBtn.textContent = 'View Details';

        const cartBtn = document.createElement('button');
        cartBtn.type = 'button';
        cartBtn.className = 'btn btn-primary add-to-cart-btn';
        cartBtn.textContent = 'Add to Cart';
        cartBtn.setAttribute('data-id', product.id);

        buttonDiv.appendChild(viewBtn);
        buttonDiv.appendChild(cartBtn);

        card.appendChild(img);
        card.appendChild(h3);
        card.appendChild(priceP);
        card.appendChild(buttonDiv);

        discountedGrid.appendChild(card);
    });
}

function renderLandingPage() {
    renderFeaturedProducts();
    renderDiscountedProducts();
}

function handleFilterChange() {
    const filterSelect = document.querySelector('#filter-category');
    if (!filterSelect) return;

    filterSelect.addEventListener('change', function() {
        const selectedCategory = this.value;
        let filteredProducts;

        if (selectedCategory === '') {
            filteredProducts = PRODUCTS;
        } else {
            filteredProducts = PRODUCTS.filter(product => product.category === selectedCategory);
        }

        renderProducts(filteredProducts);
    });
}

// Dynamic Product Rendering Function
function renderProducts(productsToRender = PRODUCTS) {
    const productsContainer = document.querySelector('#products-grid');
    
    // Clear existing content (safety measure)
    productsContainer.innerHTML = '';
    
    // Loop through products array and create cards
    productsToRender.forEach(product => {
        // Create article element
        const article = document.createElement('article');
        article.className = 'product-card';
        
        // Create image element
        const img = document.createElement('img');
        img.src = product.image;
        img.alt = product.name;
        img.className = 'product-image';
        
        // Create product name heading
        const h3 = document.createElement('h3');
        h3.className = 'product-name';
        h3.textContent = product.name;
        
        // Create product price paragraph
        const priceP = document.createElement('p');
        priceP.className = 'product-price';
        priceP.textContent = `Price: PHP ${product.price}`;
        
        // Create button container div
        const buttonDiv = document.createElement('div');
        buttonDiv.className = 'niga';
        
        // Create View Details link
        const detailsLink = document.createElement('a');
        detailsLink.href = '#';
        detailsLink.className = 'btn btn-secondary';
        detailsLink.textContent = 'View Details';
        
        // Create Add to Cart button
        const addToCartBtn = document.createElement('button');
        addToCartBtn.type = 'button';
        addToCartBtn.className = 'btn btn-primary add-to-cart-btn';
        addToCartBtn.textContent = 'Add to Cart';
        addToCartBtn.setAttribute('data-id', product.id);
        
        // Append buttons to button container
        buttonDiv.appendChild(detailsLink);
        buttonDiv.appendChild(addToCartBtn);
        
        // Append all elements to article card
        article.appendChild(img);
        article.appendChild(h3);
        article.appendChild(priceP);
        article.appendChild(buttonDiv);
        
        // Append article to container
        productsContainer.appendChild(article);
    });
}

// Event Delegation - Single listener for Add to Cart buttons
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('add-to-cart-btn')) {
        const productId = parseInt(event.target.getAttribute('data-id'));
        const product = PRODUCTS.find(p => p.id === productId);
        
        if (product) {
            // Animation feedback on the product card
            const card = event.target.closest('.product-card');
            if (card) {
                card.classList.remove('fade-in');
                void card.offsetWidth;
                card.classList.add('fade-in');
                setTimeout(() => card.classList.remove('fade-in'), 500);
            }

            // Check if product already exists in cart
            const existingItem = cart.find(item => item.id === productId);
            
            if (existingItem) {
                // Increase quantity if already in cart
                existingItem.quantity += 1;
            } else {
                // Add new item to cart with quantity 1
                cart.push({
                    id: product.id,
                    name: product.name,
                    price: product.price,
                    image: product.image,
                    quantity: 1
                });
            }
            
            saveCart();
            console.log(`Product added to cart: ${product.name}`, cart);
            alert(`${product.name} (PHP ${product.price}) added to cart!`);
            updateCartCount();
        }
    }
});

// Update Cart Count in Header
function updateCartCount() {
    const cartCountElements = document.querySelectorAll('.cart-count');
    const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
    cartCountElements.forEach(el => el.textContent = totalItems);
}

// Render Cart Function - Display cart items and calculate total
function renderCart() {
    const cartList = document.querySelector('.cart-list');
    const emptyMessage = document.querySelector('#empty-cart-message');
    const checkoutBtn = document.querySelector('.btn-checkout');
    
    if (!cartList) return; // Only run on cart page
    
    // Clear existing cart list
    cartList.innerHTML = '';
    
    if (cart.length === 0) {
        // Show empty cart message
        if (emptyMessage) emptyMessage.style.display = 'block';
        if (checkoutBtn) checkoutBtn.style.display = 'none';
        updateCartCount();
        return;
    }
    
    // Hide empty message
    if (emptyMessage) emptyMessage.style.display = 'none';
    if (checkoutBtn) checkoutBtn.style.display = 'inline-block';
    
    // Loop through cart items and create list items
    cart.forEach(item => {
        const li = document.createElement('li');
        li.className = 'cart-item';
        li.setAttribute('data-id', item.id);
        
        // Product info
        const itemInfo = document.createElement('div');
        itemInfo.className = 'item-info';
        
        const itemName = document.createElement('h4');
        itemName.textContent = item.name;
        
        const itemPrice = document.createElement('p');
        itemPrice.textContent = `PHP ${item.price}`;
        
        itemInfo.appendChild(itemName);
        itemInfo.appendChild(itemPrice);
        
        // Quantity control
        const quantityControl = document.createElement('div');
        quantityControl.className = 'quantity-control';
        
        const quantityLabel = document.createElement('label');
        quantityLabel.textContent = 'Qty: ';
        
        const quantityInput = document.createElement('input');
        quantityInput.type = 'number';
        quantityInput.className = 'quantity-input';
        quantityInput.value = item.quantity;
        quantityInput.min = '0';
        quantityInput.max = '100';
        quantityInput.setAttribute('data-id', item.id);
        
        // Event listener for quantity change
        quantityInput.addEventListener('change', function() {
            const newQuantity = parseInt(this.value) || 0;
            const cartItemIndex = cart.findIndex(i => i.id === parseInt(this.getAttribute('data-id')));
            
            if (cartItemIndex === -1) return;
            
            if (newQuantity <= 0) {
                // Remove item from cart if quantity is 0 or less
                cart.splice(cartItemIndex, 1);
            } else {
                // Update quantity
                cart[cartItemIndex].quantity = newQuantity;
            }
            
            saveCart();
            renderCart();
            updateCartCount();
        });
        
        quantityControl.appendChild(quantityLabel);
        quantityControl.appendChild(quantityInput);
        
        // Subtotal for this item
        const subtotal = document.createElement('div');
        subtotal.className = 'item-subtotal';
        subtotal.textContent = `Subtotal: PHP ${item.price * item.quantity}`;
        
        // Append all to list item
        li.appendChild(itemInfo);
        li.appendChild(quantityControl);
        li.appendChild(subtotal);
        
        // Append to cart list
        cartList.appendChild(li);
    });
    
    // Update total price using reduce
    const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
    const totalPriceElement = document.querySelector('.total-price');
    if (totalPriceElement) {
        totalPriceElement.textContent = `PHP ${totalPrice.toFixed(2)}`;
    }
    
    updateCartCount();
}

function renderCheckoutSummary() {
    const orderItemsContainer = document.querySelector('.order-items');
    const summaryPrice = document.querySelector('.summary-price');
    if (!orderItemsContainer || !summaryPrice) return;

    orderItemsContainer.innerHTML = '';

    if (cart.length === 0) {
        orderItemsContainer.innerHTML = '<p>Your cart is empty. Add items before checking out.</p>';
        summaryPrice.textContent = 'PHP 0.00';
        return;
    }

    cart.forEach(item => {
        const itemRow = document.createElement('div');
        itemRow.className = 'checkout-item';
        itemRow.innerHTML = `
            <p><strong>${item.name}</strong> x ${item.quantity}</p>
            <p>PHP ${item.price * item.quantity}</p>
        `;
        orderItemsContainer.appendChild(itemRow);
    });

    const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
    summaryPrice.textContent = `PHP ${total.toFixed(2)}`;
}

function showValidationError(element, message) {
    const container = element.closest('.form-group') || element.parentNode;
    container.classList.add('error');
    if (element.classList) {
        element.classList.add('error');
    }
    let errorMessage = container.querySelector('.error-message');
    if (!errorMessage) {
        errorMessage = document.createElement('span');
        errorMessage.className = 'error-message';
        container.appendChild(errorMessage);
    }
    errorMessage.textContent = message;
}

function clearValidationError(element) {
    const container = element.closest('.form-group') || element.parentNode;
    container.classList.remove('error');
    if (element.classList) {
        element.classList.remove('error');
    }
    const errorMessage = container.querySelector('.error-message');
    if (errorMessage) {
        errorMessage.remove();
    }
}

function validateCheckoutForm() {
    const form = document.querySelector('#checkout-form');
    if (!form) return false;

    const nameInput = form.querySelector('#name');
    const emailInput = form.querySelector('#email');
    const streetInput = form.querySelector('#street');
    const cityInput = form.querySelector('#city');
    const zipInput = form.querySelector('#zip');
    const paymentMethodInputs = Array.from(form.querySelectorAll('input[name="paymentMethod"]'));
    const cardNumberInput = form.querySelector('#cardNumber');
    const expiryInput = form.querySelector('#expiry');
    const cvvInput = form.querySelector('#cvv');
    const paymentSection = form.querySelector('#payment-section');

    let isValid = true;

    [nameInput, emailInput, streetInput, cityInput, zipInput].forEach(input => {
        clearValidationError(input);
        if (!input.value.trim()) {
            showValidationError(input, 'This field is required.');
            isValid = false;
        }
    });

    const emailValue = emailInput.value.trim();
    if (emailValue && !/^\S+@\S+\.\S+$/.test(emailValue)) {
        showValidationError(emailInput, 'Enter a valid email address.');
        isValid = false;
    }

    clearValidationError(paymentSection);
    const selectedPayment = paymentMethodInputs.find(input => input.checked);
    if (!selectedPayment) {
        showValidationError(paymentSection, 'Please choose a payment method.');
        isValid = false;
    }

    if (selectedPayment && selectedPayment.value === 'Credit Card') {
        [cardNumberInput, expiryInput, cvvInput].forEach(input => {
            clearValidationError(input);
            if (!input.value.trim()) {
                showValidationError(input, 'This field is required for credit card payment.');
                isValid = false;
            }
        });

        if (cardNumberInput.value.trim() && !/^\d{13,19}$/.test(cardNumberInput.value.replace(/\s+/g, ''))) {
            showValidationError(cardNumberInput, 'Enter a valid card number.');
            isValid = false;
        }

        if (expiryInput.value.trim() && !/^(0[1-9]|1[0-2])\/\d{2}$/.test(expiryInput.value.trim())) {
            showValidationError(expiryInput, 'Use MM/YY format.');
            isValid = false;
        }

        if (cvvInput.value.trim() && !/^\d{3,4}$/.test(cvvInput.value.trim())) {
            showValidationError(cvvInput, 'Enter a valid CVV.');
            isValid = false;
        }
    } else {
        clearValidationError(cardNumberInput);
        clearValidationError(expiryInput);
        clearValidationError(cvvInput);
    }

    return isValid;
}

const currentUser = {
    name: 'Rhea Gabito',
    orderHistory: [
        {
            id: 1,
            date: '2026-04-02',
            total: 2450,
            items: [
                { name: 'Type-A Uniform', quantity: 1, price: 1000 },
                { name: 'Customized T-shirts', quantity: 2, price: 450 }
            ]
        },
        {
            id: 2,
            date: '2026-03-18',
            total: 520,
            items: [
                { name: 'Socks', quantity: 4, price: 120 },
                { name: 'Caps', quantity: 1, price: 220 }
            ]
        },
        {
            id: 3,
            date: '2026-02-25',
            total: 180,
            items: [
                { name: 'Customized ID laces', quantity: 2, price: 90 }
            ]
        }
    ]
};

function renderAccountPage() {
    const userNameEl = document.querySelector('#user-name');
    const purchasesSection = document.querySelector('#purchases-section');
    if (!userNameEl || !purchasesSection) return;

    userNameEl.textContent = `Welcome back, ${currentUser.name}`;

    const orderContainer = document.createElement('div');
    orderContainer.id = 'order-history';

    currentUser.orderHistory.forEach(order => {
        const details = document.createElement('details');
        details.className = 'purchase-item';

        const summary = document.createElement('summary');
        summary.className = 'purchase-summary';
        summary.textContent = `Order from ${order.date} — PHP ${order.total.toFixed(2)}`;

        const detailsContent = document.createElement('div');
        detailsContent.className = 'purchase-content';

        summary.addEventListener('click', function() {
            if (detailsContent.innerHTML.trim() !== '') return;

            const itemsHtml = order.items.map(item => {
                return `<p>${item.name} — Qty: ${item.quantity} — PHP ${item.price}</p>`;
            }).join('');

            detailsContent.innerHTML = `
                <div class="order-details">
                    ${itemsHtml}
                    <p class="purchase-total">Order Total: PHP ${order.total.toFixed(2)}</p>
                </div>
            `;
        });

        details.appendChild(summary);
        details.appendChild(detailsContent);
        orderContainer.appendChild(details);
    });

    // Remove placeholder if present and append dynamic orders
    const existingPlaceholder = purchasesSection.querySelector('.purchase-item');
    if (existingPlaceholder) {
        existingPlaceholder.remove();
    }

    purchasesSection.appendChild(orderContainer);
}

// Initialize products when DOM is loaded
document.addEventListener('DOMContentLoaded', function() {
    loadCart();

    // Render landing page sections if on landing page
    if (document.querySelector('#featured-grid')) {
        renderLandingPage();
    }

    // Render products if on products page
    const productsGrid = document.querySelector('#products-grid');
    if (productsGrid) {
        renderProducts();
        handleFilterChange();
    }
    
    // Render cart if on cart page
    const cartList = document.querySelector('.cart-list');
    if (cartList) {
        renderCart();
    }

    // Render account page if present
    if (document.querySelector('#user-name')) {
        renderAccountPage();
    }
    
    // Attach checkout validation if on checkout page
    const checkoutForm = document.querySelector('#checkout-form');
    if (checkoutForm) {
        renderCheckoutSummary();
        checkoutForm.addEventListener('submit', function(event) {
            event.preventDefault();
            if (validateCheckoutForm()) {
                console.log('Checkout form validated successfully. Redirecting to thank you page.');
                window.location.href = 'thankyou.html';
            }
        });
    }
    
    // Update cart count
    updateCartCount();
});

