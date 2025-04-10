// DOM Elements
const mainImage = document.getElementById('mainImage');
const thumbnailContainer = document.getElementById('thumbnailContainer');
const decreaseQuantity = document.getElementById('decreaseQuantity');
const increaseQuantity = document.getElementById('increaseQuantity');
const quantityInput = document.getElementById('quantity');
const colorOptions = document.querySelectorAll('.color-option');
const sizeOptions = document.querySelectorAll('.size-option');
const addToCartBtn = document.getElementById('addToCartBtn');
const buyNowBtn = document.getElementById('buyNowBtn');
const wishlistBtn = document.getElementById('wishlistBtn');
const tabBtns = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');
const similarProductsSlider = document.getElementById('similarProductsSlider');

// Product Thumbnails
if (thumbnailContainer && mainImage) {
    const thumbnails = thumbnailContainer.querySelectorAll('.thumbnail');
    
    thumbnails.forEach(thumbnail => {
        thumbnail.addEventListener('click', () => {
            // Remove active class from all thumbnails
            thumbnails.forEach(thumb => thumb.classList.remove('active'));
            
            // Add active class to clicked thumbnail
            thumbnail.classList.add('active');
            
            // Update main image
            const imgSrc = thumbnail.dataset.img;
            const mainImg = mainImage.querySelector('img');
            mainImg.src = imgSrc;
        });
    });
}

// Quantity Selector
if (decreaseQuantity && increaseQuantity && quantityInput) {
    decreaseQuantity.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue > 1) {
            quantityInput.value = currentValue - 1;
        }
    });
    
    increaseQuantity.addEventListener('click', () => {
        const currentValue = parseInt(quantityInput.value);
        quantityInput.value = currentValue + 1;
    });
    
    quantityInput.addEventListener('change', () => {
        const currentValue = parseInt(quantityInput.value);
        if (currentValue < 1 || isNaN(currentValue)) {
            quantityInput.value = 1;
        }
    });
}

// Color Options
if (colorOptions) {
    colorOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            colorOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Update selected color text
            const selectedColor = option.dataset.color;
            document.getElementById('selectedColor').textContent = selectedColor;
        });
    });
}

// Size Options
if (sizeOptions) {
    sizeOptions.forEach(option => {
        option.addEventListener('click', () => {
            // Remove active class from all options
            sizeOptions.forEach(opt => opt.classList.remove('active'));
            
            // Add active class to clicked option
            option.classList.add('active');
            
            // Update selected size text
            const selectedSize = option.dataset.size;
            document.getElementById('selectedSize').textContent = selectedSize;
        });
    });
}

// Add to Cart Button
if (addToCartBtn) {
    addToCartBtn.addEventListener('click', () => {
        // Check if size is selected
        const selectedSize = document.getElementById('selectedSize').textContent;
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        
        // In a real app, this would add the product to cart
        alert('Product added to cart!');
    });
}

// Buy Now Button
if (buyNowBtn) {
    buyNowBtn.addEventListener('click', () => {
        // Check if size is selected
        const selectedSize = document.getElementById('selectedSize').textContent;
        if (!selectedSize) {
            alert('Please select a size');
            return;
        }
        
        // In a real app, this would add the product to cart and redirect to checkout
        window.location.href = 'checkout.html';
    });
}

// Wishlist Button
if (wishlistBtn) {
    wishlistBtn.addEventListener('click', () => {
        const icon = wishlistBtn.querySelector('i');
        
        if (icon.classList.contains('far')) {
            icon.classList.remove('far');
            icon.classList.add('fas');
            icon.style.color = '#e74c3c';
            
            // In a real app, this would add the product to wishlist
            alert('Product added to wishlist!');
        } else {
            icon.classList.remove('fas');
            icon.classList.add('far');
            icon.style.color = '';
            
            // In a real app, this would remove the product from wishlist
            alert('Product removed from wishlist!');
        }
    });
}

// Product Tabs
if (tabBtns && tabContents) {
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all tabs
            tabBtns.forEach(tab => tab.classList.remove('active'));
            tabContents.forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab
            btn.classList.add('active');
            
            // Show corresponding content
            const tabId = btn.dataset.tab;
            document.getElementById(tabId).classList.add('active');
        });
    });
}

// Load Similar Products
if (similarProductsSlider) {
    const products = [
        {
            id: '201',
            name: 'V-Neck Cotton T-Shirt',
            price: 24.99,
            image: 'https://placehold.co/300x400'
        },
        {
            id: '202',
            name: 'Long Sleeve Cotton Shirt',
            price: 39.99,
            image: 'https://placehold.co/300x400'
        },
        {
            id: '203',
            name: 'Graphic Print T-Shirt',
            price: 34.99,
            image: 'https://placehold.co/300x400'
        },
        {
            id: '204',
            name: 'Striped Cotton T-Shirt',
            price: 29.99,
            image: 'https://placehold.co/300x400'
        }
    ];
    
    let html = '';
    
    products.forEach(product => {
        html += `
            <div class="product-card">
                <div class="product-img-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    similarProductsSlider.innerHTML = html;
}