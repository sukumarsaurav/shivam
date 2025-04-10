// DOM Elements
const filterBtn = document.getElementById('filterBtn');
const sortBtn = document.getElementById('sortBtn');
const filterSheet = document.getElementById('filterSheet');
const sortSheet = document.getElementById('sortSheet');
const closeFilterSheet = document.getElementById('closeFilterSheet');
const closeSortSheet = document.getElementById('closeSortSheet');
const resetFilters = document.getElementById('resetFilters');
const applyFilters = document.getElementById('applyFilters');
const applySort = document.getElementById('applySort');
const minPriceSlider = document.getElementById('minPrice');
const maxPriceSlider = document.getElementById('maxPrice');
const minPriceValue = document.getElementById('minPriceValue');
const maxPriceValue = document.getElementById('maxPriceValue');
const productsGrid = document.getElementById('productsGrid');

// Get URL parameters
const urlParams = new URLSearchParams(window.location.search);
const category = urlParams.get('category') || 'all';
const subcategory = urlParams.get('subcategory');

// Mock loadSubcategories function (replace with your actual implementation)
function loadSubcategories(category) {
    // In a real application, this function would fetch subcategories
    // based on the selected category and update the subcategory list.
    console.log(`Loading subcategories for category: ${category}`);
}

// Mock updateSlider function (replace with your actual implementation if needed elsewhere)
function updateSlider() {
    const min = parseInt(minPriceSlider.value);
    const max = parseInt(maxPriceSlider.value);

    if (min > max) {
        minPriceSlider.value = max;
        minPriceValue.textContent = max;
    } else {
        minPriceValue.textContent = min;
    }

    maxPriceValue.textContent = max;

    // Update slider track
    const percent1 = (min / 200) * 100;
    const percent2 = (max / 200) * 100;

    document.querySelector('.slider-track').style.background = `linear-gradient(to right, #e5e5e5 ${percent1}%, var(--primary-color) ${percent1}%, var(--primary-color) ${percent2}%, #e5e5e5 ${percent2}%)`;
}

// Set active tab based on URL
if (category !== 'all') {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        if (tab.dataset.category === category) {
            tab.classList.add('active');
        } else if (tab.classList.contains('active')) {
            tab.classList.remove('active');
        }
    });
    
    // Load subcategories for the active tab
    if (typeof loadSubcategories === 'function') {
        loadSubcategories(category);
        
        // If subcategory is specified, mark it as active
        if (subcategory) {
            setTimeout(() => {
                const subcategoryElements = document.querySelectorAll('.subcategory');
                subcategoryElements.forEach(element => {
                    if (element.dataset.slug === subcategory) {
                        element.classList.add('active');
                    }
                });
            }, 100);
        }
    }
}

// Mobile Filter and Sort Sheets
if (filterBtn && filterSheet && closeFilterSheet) {
    filterBtn.addEventListener('click', () => {
        filterSheet.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeFilterSheet.addEventListener('click', () => {
        filterSheet.classList.remove('active');
        document.body.style.overflow = '';
    });
}

if (sortBtn && sortSheet && closeSortSheet) {
    sortBtn.addEventListener('click', () => {
        sortSheet.classList.add('active');
        document.body.style.overflow = 'hidden';
    });
    
    closeSortSheet.addEventListener('click', () => {
        sortSheet.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Price Range Slider
if (minPriceSlider && maxPriceSlider && minPriceValue && maxPriceValue) {
    function updateSlider() {
        const min = parseInt(minPriceSlider.value);
        const max = parseInt(maxPriceSlider.value);
        
        if (min > max) {
            minPriceSlider.value = max;
            minPriceValue.textContent = max;
        } else {
            minPriceValue.textContent = min;
        }
        
        maxPriceValue.textContent = max;
        
        // Update slider track
        const percent1 = (min / 200) * 100;
        const percent2 = (max / 200) * 100;
        
        document.querySelector('.slider-track').style.background = `linear-gradient(to right, #e5e5e5 ${percent1}%, var(--primary-color) ${percent1}%, var(--primary-color) ${percent2}%, #e5e5e5 ${percent2}%)`;
    }
    
    minPriceSlider.addEventListener('input', updateSlider);
    maxPriceSlider.addEventListener('input', updateSlider);
    
    // Initial update
    updateSlider();
}

// Reset Filters
if (resetFilters) {
    resetFilters.addEventListener('click', () => {
        // Reset price range
        if (minPriceSlider && maxPriceSlider) {
            minPriceSlider.value = 0;
            maxPriceSlider.value = 200;
            updateSlider();
        }
        
        // Reset checkboxes
        const checkboxes = document.querySelectorAll('.filter-option input');
        checkboxes.forEach(checkbox => {
            checkbox.checked = false;
        });
    });
}

// Apply Filters
if (applyFilters) {
    applyFilters.addEventListener('click', () => {
        // In a real app, this would filter the products
        // For demo purposes, we'll just close the sheet
        filterSheet.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Apply Sort
if (applySort) {
    applySort.addEventListener('click', () => {
        // In a real app, this would sort the products
        // For demo purposes, we'll just close the sheet
        sortSheet.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Load Products for Category Page
if (productsGrid) {
    const products = [
        {
            id: '1',
            name: 'Classic White T-Shirt',
            price: 29.99,
            image: 'https://placehold.co/300x400',
            isNew: true,
            category: 'men',
            subcategory: 'casual',
            discount: 0
        },
        {
            id: '2',
            name: 'Slim Fit Jeans',
            price: 59.99,
            image: 'https://placehold.co/300x400',
            category: 'men',
            subcategory: 'casual',
            discount: 0
        },
        {
            id: '3',
            name: 'Summer Floral Dress',
            price: 79.99,
            image: 'https://placehold.co/300x400',
            category: 'women',
            subcategory: 'western',
            discount: 0
        },
        {
            id: '4',
            name: 'Casual Sneakers',
            price: 89.99,
            image: 'https://placehold.co/300x400',
            category: 'men',
            subcategory: 'footwear',
            discount: 0
        },
        {
            id: '5',
            name: 'Leather Jacket',
            price: 199.99,
            image: 'https://placehold.co/300x400',
            category: 'men',
            subcategory: 'casual',
            discount: 15
        },
        {
            id: '6',
            name: 'Wool Sweater',
            price: 69.99,
            image: 'https://placehold.co/300x400',
            category: 'men',
            subcategory: 'casual',
            discount: 0
        },
        {
            id: '7',
            name: 'Denim Shorts',
            price: 49.99,
            image: 'https://placehold.co/300x400',
            category: 'women',
            subcategory: 'western',
            discount: 0
        },
        {
            id: '8',
            name: 'Cotton Hoodie',
            price: 59.99,
            image: 'https://placehold.co/300x400',
            category: 'men',
            subcategory: 'casual',
            discount: 10
        }
    ];
    
    // Filter products based on URL parameters
    let filteredProducts = products;
    
    if (category !== 'all' && category) {
        filteredProducts = filteredProducts.filter(product => product.category === category);
    }
    
    if (subcategory) {
        filteredProducts = filteredProducts.filter(product => product.subcategory === subcategory);
    }
    
    // Render products
    let html = '';
    
    filteredProducts.forEach(product => {
        html += `
            <div class="product-card">
                <div class="product-img-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    ${product.discount ? `<span class="discount-tag">${product.discount}% OFF</span>` : ''}
                    ${product.isNew ? `<span class="discount-tag" style="background-color: #4CAF50;">NEW</span>` : ''}
                </div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${product.price.toFixed(2)}</span>
                        ${product.discount ? `<span class="original-price">$${(product.price * 100 / (100 - product.discount)).toFixed(2)}</span>` : ''}
                    </div>
                </div>
            </div>
        `;
    });
    
    productsGrid.innerHTML = html;
}