// DOM Elements
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
const closeMenu = document.getElementById('closeMenu');
const categoryTabs = document.getElementById('categoryTabs');
const subcategoriesContainer = document.getElementById('subcategoriesContainer');
const heroSlider = document.getElementById('heroSlider');
const sliderDots = document.querySelectorAll('.dot');
const dealsSlider = document.getElementById('dealsSlider');
const featuredProducts = document.getElementById('featuredProducts');
const newArrivalsSlider = document.getElementById('newArrivalsSlider');
const backBtn = document.getElementById('backBtn');

// Mobile Menu
if (menuBtn && mobileMenu && closeMenu) {
    menuBtn.addEventListener('click', () => {
        mobileMenu.classList.add('active');
        document.body.style.overflow = 'hidden';
    });

    closeMenu.addEventListener('click', () => {
        mobileMenu.classList.remove('active');
        document.body.style.overflow = '';
    });
}

// Category Tabs
if (categoryTabs) {
    const tabs = categoryTabs.querySelectorAll('.tab');
    
    tabs.forEach(tab => {
        tab.addEventListener('click', () => {
            tabs.forEach(t => t.classList.remove('active'));
            tab.classList.add('active');
            
            const category = tab.dataset.category;
            loadSubcategories(category);
        });
    });
    
    // Load initial subcategories
    loadSubcategories('all');
}

// Load subcategories based on selected category
function loadSubcategories(category) {
    if (!subcategoriesContainer) return;
    
    let subcategories = [];
    
    if (category === 'all') {
        subcategories = [
            { name: 'Casual', image: 'https://placehold.co/80x80', slug: 'casual', parent: 'men' },
            { name: 'Western', image: 'https://placehold.co/80x80', slug: 'western', parent: 'women' },
            { name: 'Ethnic', image: 'https://placehold.co/80x80', slug: 'ethnic', parent: 'women' },
            { name: 'Footwear', image: 'https://placehold.co/80x80', slug: 'footwear', parent: 'men' },
            { name: 'Boys', image: 'https://placehold.co/80x80', slug: 'boys', parent: 'kids' },
            { name: 'Girls', image: 'https://placehold.co/80x80', slug: 'girls', parent: 'kids' },
            { name: 'Sports', image: 'https://placehold.co/80x80', slug: 'sports', parent: 'men' },
            { name: 'Beauty', image: 'https://placehold.co/80x80', slug: 'beauty', parent: 'women' },
        ];
    } else if (category === 'men') {
        subcategories = [
            { name: 'Casual', image: 'https://placehold.co/80x80', slug: 'casual' },
            { name: 'Ethnic', image: 'https://placehold.co/80x80', slug: 'ethnic' },
            { name: 'Footwear', image: 'https://placehold.co/80x80', slug: 'footwear' },
            { name: 'Sports', image: 'https://placehold.co/80x80', slug: 'sports' },
            { name: 'Add-ons', image: 'https://placehold.co/80x80', slug: 'add-ons' },
        ];
    } else if (category === 'women') {
        subcategories = [
            { name: 'Western', image: 'https://placehold.co/80x80', slug: 'western' },
            { name: 'Ethnic', image: 'https://placehold.co/80x80', slug: 'ethnic' },
            { name: 'Beauty', image: 'https://placehold.co/80x80', slug: 'beauty' },
            { name: 'Add-ons', image: 'https://placehold.co/80x80', slug: 'add-ons' },
        ];
    } else if (category === 'kids') {
        subcategories = [
            { name: 'Boys', image: 'https://placehold.co/80x80', slug: 'boys' },
            { name: 'Girls', image: 'https://placehold.co/80x80', slug: 'girls' },
            { name: 'Infants', image: 'https://placehold.co/80x80', slug: 'infants' },
            { name: 'Toys', image: 'https://placehold.co/80x80', slug: 'toys' },
        ];
    }
    
    let html = '';
    
    subcategories.forEach(sub => {
        const href = category === 'all' 
            ? `category.html?category=${sub.parent}&subcategory=${sub.slug}`
            : `category.html?category=${category}&subcategory=${sub.slug}`;
            
        html += `
            <div class="subcategory" data-slug="${sub.slug}">
                <div class="subcategory-img">
                    <img src="${sub.image}" alt="${sub.name}">
                </div>
                <span class="subcategory-name">${sub.name}</span>
            </div>
        `;
    });
    
    subcategoriesContainer.innerHTML = html;
    
    // Add click event to subcategories
    const subcategoryElements = subcategoriesContainer.querySelectorAll('.subcategory');
    subcategoryElements.forEach(element => {
        element.addEventListener('click', () => {
            element.classList.toggle('active');
        });
    });
}

// Hero Slider
if (heroSlider && sliderDots.length) {
    let currentSlide = 0;
    const slides = heroSlider.querySelectorAll('.hero-slide');
    const totalSlides = slides.length;
    
    function showSlide(index) {
        slides.forEach(slide => slide.classList.remove('active'));
        sliderDots.forEach(dot => dot.classList.remove('active'));
        
        slides[index].classList.add('active');
        sliderDots[index].classList.add('active');
        currentSlide = index;
    }
    
    sliderDots.forEach(dot => {
        dot.addEventListener('click', () => {
            const slideIndex = parseInt(dot.dataset.slide);
            showSlide(slideIndex);
        });
    });
    
    // Auto slide
    setInterval(() => {
        const nextSlide = (currentSlide + 1) % totalSlides;
        showSlide(nextSlide);
    }, 5000);
}

// Load Deal Products
if (dealsSlider) {
    const deals = [
        {
            id: 'd1',
            name: 'Summer Dress',
            price: 39.99,
            originalPrice: 79.99,
            discount: 50,
            image: 'https://placehold.co/200x300'
        },
        {
            id: 'd2',
            name: 'Denim Jacket',
            price: 49.99,
            originalPrice: 89.99,
            discount: 44,
            image: 'https://placehold.co/200x300'
        },
        {
            id: 'd3',
            name: 'Casual Sneakers',
            price: 29.99,
            originalPrice: 59.99,
            discount: 50,
            image: 'https://placehold.co/200x300'
        },
        {
            id: 'd4',
            name: 'Formal Shirt',
            price: 24.99,
            originalPrice: 49.99,
            discount: 50,
            image: 'https://placehold.co/200x300'
        },
        {
            id: 'd5',
            name: 'Leather Bag',
            price: 59.99,
            originalPrice: 119.99,
            discount: 50,
            image: 'https://placehold.co/200x300'
        },
        {
            id: 'd6',
            name: 'Sunglasses',
            price: 19.99,
            originalPrice: 39.99,
            discount: 50,
            image: 'https://placehold.co/200x300'
        }
    ];
    
    let html = '';
    
    deals.forEach(deal => {
        html += `
            <div class="product-card">
                <div class="product-img-container">
                    <img src="${deal.image}" alt="${deal.name}" class="product-img">
                    <span class="discount-tag">${deal.discount}% OFF</span>
                </div>
                <div class="product-info">
                    <h3 class="product-name">${deal.name}</h3>
                    <div class="product-price">
                        <span class="current-price">$${deal.price.toFixed(2)}</span>
                        <span class="original-price">$${deal.originalPrice.toFixed(2)}</span>
                    </div>
                </div>
            </div>
        `;
    });
    
    dealsSlider.innerHTML = html;
}

// Load Featured Products
if (featuredProducts) {
    const products = [
        {
            id: '1',
            name: 'Classic White T-Shirt',
            price: 29.99,
            image: 'https://placehold.co/300x400',
            isNew: true,
            category: 'bestsellers',
            isTrending: true
        },
        {
            id: '2',
            name: 'Slim Fit Jeans',
            price: 59.99,
            image: 'https://placehold.co/300x400',
            category: 'bestsellers'
        },
        {
            id: '3',
            name: 'Summer Floral Dress',
            price: 79.99,
            image: 'https://placehold.co/300x400',
            category: 'trending',
            isNew: true,
            isTrending: true
        },
        {
            id: '4',
            name: 'Casual Sneakers',
            price: 89.99,
            image: 'https://placehold.co/300x400',
            category: 'new',
            isNew: true
        },
        {
            id: '5',
            name: 'Leather Jacket',
            price: 199.99,
            image: 'https://placehold.co/300x400',
            category: 'bestsellers',
            isTrending: true,
            discount: 15
        },
        {
            id: '6',
            name: 'Wool Sweater',
            price: 69.99,
            image: 'https://placehold.co/300x400',
            category: 'new',
            isNew: true
        },
        {
            id: '7',
            name: 'Denim Shorts',
            price: 49.99,
            image: 'https://placehold.co/300x400',
            category: 'trending',
            isTrending: true
        },
        {
            id: '8',
            name: 'Cotton Hoodie',
            price: 59.99,
            image: 'https://placehold.co/300x400',
            category: 'bestsellers',
            discount: 10
        }
    ];
    
    function renderProducts(filterCategory = 'all') {
        const filteredProducts = filterCategory === 'all' 
            ? products 
            : filterCategory === 'bestsellers'
                ? products.filter(p => p.category === 'bestsellers')
                : filterCategory === 'trending'
                    ? products.filter(p => p.isTrending)
                    : products.filter(p => p.isNew);
        
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
        
        featuredProducts.innerHTML = html;
    }
    
    // Initial render
    renderProducts();
    
    // Add event listeners to tabs
    const tabBtns = document.querySelectorAll('.featured-section .tab-btn');
    tabBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            tabBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const category = btn.dataset.tab;
            renderProducts(category);
        });
    });
}

// Load New Arrivals
if (newArrivalsSlider) {
    const products = [
        {
            id: '101',
            name: 'Oversized Linen Shirt',
            price: 49.99,
            image: 'https://placehold.co/300x400',
            isNew: true
        },
        {
            id: '102',
            name: 'Pleated Midi Skirt',
            price: 59.99,
            image: 'https://placehold.co/300x400',
            isNew: true
        },
        {
            id: '103',
            name: 'Relaxed Fit Chinos',
            price: 69.99,
            image: 'https://placehold.co/300x400',
            isNew: true
        },
        {
            id: '104',
            name: 'Structured Blazer',
            price: 129.99,
            image: 'https://placehold.co/300x400',
            isNew: true
        },
        {
            id: '105',
            name: 'Knit Cardigan',
            price: 79.99,
            image: 'https://placehold.co/300x400',
            isNew: true
        },
        {
            id: '106',
            name: 'Slim Fit Jeans',
            price: 89.99,
            image: 'https://placehold.co/300x400',
            isNew: true
        }
    ];
    
    let html = '';
    
    products.forEach(product => {
        html += `
            <div class="product-card">
                <div class="product-img-container">
                    <img src="${product.image}" alt="${product.name}" class="product-img">
                    ${product.isNew ? `<span class="discount-tag" style="background-color: #4CAF50;">NEW</span>` : ''}
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
    
    newArrivalsSlider.innerHTML = html;
}

// Back Button
if (backBtn) {
    backBtn.addEventListener('click', () => {
        window.history.back();
    });
}

// Hide/Show Category Tabs on Scroll
let lastScrollTop = 0;

window.addEventListener('scroll', () => {
    if (!categoryTabs) return;
    
    const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
        // Scrolling down
        categoryTabs.style.transform = 'translateY(-100%)';
    } else {
        // Scrolling up
        categoryTabs.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = currentScrollTop;
});

// Handle subcategory selection
if (subcategoriesContainer) {
    subcategoriesContainer.addEventListener('click', (e) => {
        const subcategory = e.target.closest('.subcategory');
        if (subcategory) {
            subcategory.classList.toggle('active');
        }
    });
}
// Add this code to your existing app.js file

// Search functionality
const searchToggle = document.getElementById('searchToggle');
const searchOverlay = document.getElementById('searchOverlay');
const searchBackBtn = document.getElementById('searchBackBtn');
const mobileSearchInput = document.getElementById('mobileSearchInput');

if (searchToggle && searchOverlay && searchBackBtn) {
    // Open search overlay
    searchToggle.addEventListener('click', () => {
        searchOverlay.classList.add('active');
        document.body.style.overflow = 'hidden';
        
        // Focus on search input after a small delay to ensure the overlay is visible
        setTimeout(() => {
            if (mobileSearchInput) {
                mobileSearchInput.focus();
            }
        }, 300);
    });
    
    // Close search overlay
    searchBackBtn.addEventListener('click', () => {
        searchOverlay.classList.remove('active');
        document.body.style.overflow = '';
    });
    
    // Handle search submission
    if (mobileSearchInput) {
        mobileSearchInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                // In a real app, this would submit the search
                const searchTerm = mobileSearchInput.value.trim();
                if (searchTerm) {
                    window.location.href = `search-results.html?q=${encodeURIComponent(searchTerm)}`;
                }
            }
        });
    }
}