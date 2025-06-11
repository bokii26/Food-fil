// Product Data (remains the same - make sure this is consistent)
const dishes = [
    {
        name: "Lechon Kawali",
        price: 120,
        category: "Pork",
        img: "lechon.jpg",
        description: "Crispy deep-fried pork belly, a Filipino favorite known for its crunchy skin and tender, juicy meat. Often served with a tangy vinegar dipping sauce."
    },
    {
        name: "Adobong Manok",
        price: 60,
        category: "Chicken",
        img: "chickenadobo.jpg",
        description: "The unofficial national dish of the Philippines, typically made with chicken (or pork) braised in vinegar, soy sauce, garlic, and peppercorns. Savory and tangy."
    },
    {
        name: "Grilled Pusit",
        price: 100,
        category: "Seafood",
        img: "pusit.jpg",
        description: "Tender squid marinated in a savory-sweet sauce, then grilled to perfection. A popular seafood dish, especially when enjoyed by the beach."
    },
    {
        name: "Pork Sisig",
        price: 80,
        category: "Pork",
        img: "sisig.jpg",
        description: "A sizzling Filipino pulutan (appetizer) made from chopped pig's head and liver, seasoned with calamansi, onions, and chili peppers. Best served on a hot plate."
    },
    {
        name: "Chicken Inasal",
        price: 150,
        category: "Chicken",
        img: "inasal.jpg",
        description: "Grilled chicken marinated in a unique blend of calamansi, vinegar, garlic, ginger, and annatto oil, giving it a distinct yellowish-orange hue and smoky flavor."
    },
    {
        name: "Kare-Kare",
        price: 70,
        category: "Pork",
        img: "karekare.jpg",
        description: "A rich and creamy peanut stew, traditionally made with oxtail or pork, but this version features a delightful mix of fresh seafood and vegetables, served with bagoong (shrimp paste)."
    },
    {
        name: "Sinigang na Baboy",
        price: 70,
        category: "Pork",
        img: "sinigang.jpg",
        description: "Sinigang na Baboy is the ultimate comfort food! Made with pork ribs, vegetables, and tamarind-flavored broth, it's hearty and delicious on its own or served with steamed rice."
    },
    {
        name: "Chicken Tinola",
        price: 60,
        category: "Chicken",
        img: "tinola.jpg",
        description: "A comforting and healthy ginger-based chicken soup with green papaya or chayote and leafy greens like malunggay or chili pepper leaves. Perfect for a rainy day."
    },
    {
        name: "Kinilaw",
        price: 80,
        category: "Seafood",
        img: "kinilaw.jpg",
        description: "Kinilaw is a dish made from raw seafood and a method of food preparation native to the Philippines. make in citruis and vinegar."
    },
        {
        name: "Tilapia",
        price: 100,
        category: "Seafood",
        img: "tilapia.jpg",
        description: "Fried tilapia, a beloved staple in Filipino cuisine, showcases the seamless integration of the introduced Nile tilapia into traditional frying methods, creating an accessible and widely enjoyed dish.."
    },
        {
        name: "Bicol Express",
        price: 120,
        category: "Pork",
        img: "bicolexpress.jpg",
        description: "A spicy pork dish stewed in coconut milk with chili peppers, garlic, ginger, and shrimp paste. Originating from the Bicol region, it's known for its creamy, fiery flavor."
    },
        {
        name: "Pork Barbeque",
        price: 30,
        category: "Pork",
        img: "porkbbq.jpg",
        description: "Marinated pork skewers grilled over charcoal, often brushed with a sweet-savory glaze made of soy sauce, banana ketchup, garlic, and sugar. A popular street food and party favorite."
    },
        {
        name: "Paksiw na Pata",
        price: 120,
        category: "Pork",
        img: "paksiwnapata.jpg",
        description: "A hearty stew made with pork hock (pata) simmered in vinegar, soy sauce, garlic, and dried banana blossoms. It’s savory, tangy, and tender, with a rich sauce perfect for rice."
    },
        {
        name: "Binagoongan na Baboy",
        price: 80,
        category: "Pork",
        img: "binagoonganbaboy.jpg",
        description: "Pork belly sautéed and simmered in fermented shrimp paste (bagoong), often served with eggplant. It’s salty, umami-rich, and usually paired with rice."
    },
        {
        name: "Menudo",
        price: 60,
        category: "Pork",
        img: "menudo.jpg",
        description: "A comforting tomato-based pork stew with liver, potatoes, carrots, and bell peppers. It's a classic dish served at Filipino gatherings and family dinners."
    },
        {
        name: "Nilagang Baboy",
        price: 120,
        category: "Pork",
        img: "nilagangbaboy.jpg",
        description: "A clear pork soup with boiled vegetables like potatoes, corn, pechay (bok choy), and saba banana. Mild, comforting, and ideal for cold days or simple meals."
    },
        {
        name: "Fried Chicken",
        price: 50,
        category: "Chicken",
        img: "friedchicken.jpg",
        description: "Crispy on the outside, juicy on the inside — Filipino-style fried chicken is often marinated in calamansi, soy sauce, and garlic before deep frying. It’s a beloved ulam for kids and adults alike."
    },
        {
        name: "Chicken Curry",
        price: 70,
        category: "Chicken",
        img: "chickencurry.jpg",
        description: "Chicken cooked in coconut milk with curry powder, potatoes, and carrots. Filipino curry is milder and sweeter than Indian curry but equally comforting and aromatic."
    },
        {
        name: "Pininyahang Manok",
        price: 60,
        category: "Chicken",
        img: "pininyahangmanok.jpg",
        description: "This sweet and creamy chicken stew features pineapple chunks and juice, paired with vegetables like carrots and bell peppers. The tropical flavor makes it distinct from other Filipino chicken dishes."
    },
        {
        name: "Chicken Afritada",
        price: 60,
        category: "Chicken",
        img: "chickenafritada.jpg",
        description: "A tomato-based chicken stew cooked with potatoes, carrots, and bell peppers. It has a hearty, sweet-savory flavor profile and is commonly seen in family lunches and fiestas."
    },
        {
        name: "Chicken Caldereta",
        price: 60,
        category: "Chicken",
        img: "chickencaldereta.jpg",
        description: "A rich stew made with chicken, liver spread, bell peppers, potatoes, and a tomato-based sauce. It’s a poultry twist on the classic beef caldereta, slightly sweet and boldly savory."
    },
        {
        name: "Chicken Embutido",
        price: 70,
        category: "Chicken",
        img: "chickenembutido.jpg",
        description: "A rolled, steamed meatloaf made with ground chicken, eggs, raisins, cheese, and vegetables. Often sliced and fried, it's served during holidays or as packed lunch."
    },
        {
        name: "Garlic Butter Chicken",
        price: 80,
        category: "Chicken",
        img: "garlicbutterchicken.jpg",
        description: "Pan-fried or grilled chicken tossed in a buttery garlic sauce, often served sizzling. It’s a simple yet indulgent dish served in many casual Filipino restaurants."
    },
        {
        name: "Nilagang Baka",
        price: 120,
        category: "Beef",
        img: "nilagang baka.jpg",
        description: "A classic clear beef soup with boiled beef shank, potatoes, saba banana, cabbage, and corn on the cob. Comforting and filling, often enjoyed on rainy days."
    },
        {
        name: "Bistek",
        price: 100,
        category: "Beef",
        img: "bistektagalog.jpg",
        description: "Thinly sliced beef marinated in calamansi and soy sauce, then pan-fried with caramelized onions. A savory, tangy dish that’s perfect with hot rice."
    },
        {
        name: "Bulalo",
        price: 100,
        category: "Beef",
        img: "bulalo.jpg",
        description: "A specialty from Batangas, this is a bone marrow soup made by slow-boiling beef shank until tender, served with corn, cabbage, and pechay in a light, flavorful broth."
    },
        {
        name: "Beef Pares",
        price: 80,
        category: "Beef",
        img: "pares.jpg",
        description: "A sweet-savory braised beef stew served with garlic fried rice and clear beef soup. It’s a staple of Filipino late-night eateries and street-side pares houses."
    },
        {
        name: "Beef Tapa",
        price: 100,
        category: "Beef",
        img: "beeftapa.jpg",
        description: "Cured and fried beef slices, often served with garlic rice and fried egg in the classic “tapsilog” combo. Slightly sweet, savory, and smoky."
    },
        {
        name: "Mechado",
        price: 100,
        category: "Beef",
        img: "mechado.jpg",
        description: "A tomato-based beef stew with larded beef cuts (traditionally stuffed with pork fat), simmered with soy sauce, tomatoes, and calamansi."
    },
        {
        name: "Pochero",
        price: 120,
        category: "Beef",
        img: "pochero.jpg",
        description: "A Spanish-Filipino stew with beef, tomato sauce, saba bananas, pechay, and sometimes chorizo. Slightly sweet and very hearty."
    },
        {
        name: "Beef Siomai",
        price: 20,
        category: "Beef",
        img: "beefsiomai.jpg",
        description: "Steamed beef dumplings seasoned with garlic and soy, often served with chili garlic sauce and calamansi. Popular as street food and in fast-casual eateries."
    },
        {
        name: "Beef Giniling",
        price: 80,
        category: "Beef",
        img: "beefginiling.jpg",
        description: "Ground beef simmered in tomato sauce with diced potatoes, carrots, bell peppers, and green peas. Simple, flavorful, and often served with steamed rice or used as a filling in empanadas."
    },
            {
        name: "Lumpiang Shanghai(Beef)",
        price: 30,
        category: "Beef",
        img: "beeflumpia.jpg",
        description: "A variation of lumpiang shanghai using seasoned ground beef as filling, wrapped in lumpia wrappers and deep-fried until golden. Often served with sweet chili sauce."
    },
        {
        name: "Sinigang na Hipon",
        price: 100,
        category: "Seafood",
        img: "sinigangnahipon.jpg",
        description: "A sour tamarind-based soup made with fresh shrimp, tomatoes, radish, string beans, and kangkong (water spinach). A comforting, tangy seafood soup served hot with rice."
    },
        {
        name: "Adobong Pusit",
        price: 75,
        category: "Seafood",
        img: "adobongpusit.jpg",
        description: "Tender squid simmered in soy sauce, vinegar, garlic, and its own ink, resulting in a dark, rich, and savory adobo dish with a hint of natural sweetness from the squid."
    },
        {
        name: "Halaan Soup",
        price: 80,
        category: "Seafood",
        img: "halaansoup.jpg",
        description: "A light soup made with fresh clams, ginger, and leafy greens. Mildly sweet and salty, it's known for being soothing and often used as a home remedy for colds."
    },
        {
        name: "Sinigang na Bangus",
        price: 75,
        category: "Seafood",
        img: "sinigangnabangus.jpg",
        description: "A tangy tamarind-based soup with milkfish and assorted vegetables like radish, eggplant, and kangkong. Light, flavorful, and perfect with rice."
    },
        {
        name: "Squid Rings",
        price: 100,
        category: "Seafood",
        img: "calamares.jpg",
        description: "Breaded and deep-fried squid rings served with garlic mayo or sweet chili sauce. A beloved snack, appetizer, or street food item."
    },
        {
        name: "Garlic Butter Shrimp",
        price: 100,
        category: "Seafood",
        img: "garlicbuttershrimp.jpg",
        description: "Shrimp sautéed in butter, garlic, and a hint of spice — rich and aromatic."
    },
        {
        name: "Paksiw na Bangus",
        price: 120,
        category: "Seafood",
        img: "paksiw.jpg",
        description: "Fish (like bangus, tilapia, or galunggong) simmered in vinegar, garlic, and ginger. A tangy and slightly salty dish that’s easy to preserve and serve with rice."
    },
];

// Cart state - Loaded from localStorage
let cart = JSON.parse(localStorage.getItem('ulamDealsCart')) || [];

// Global Elements (present on all pages, or conditionally checked)
const cartCount = document.getElementById("cart-count");
const cartPopup = document.getElementById("cart-popup");
const menuIcon = document.getElementById("menu-icon");
const navbar = document.querySelector(".navbar");
const productsGrid = document.getElementById("productsGrid"); // Moved here for central access

// Cart Page Elements (only on cart.html, will be null on index.html)
const modalOrderItems = document.getElementById('modalOrderItems');
const modalOrderTotal = document.getElementById('modalOrderTotal');
const confirmOrderBtn = document.getElementById('confirmOrderBtn');
const fullNameInput = document.getElementById('full-name');
const addressInput = document.getElementById('address');
const phoneInput = document.getElementById('phone');
const deliveryMethodSelect = document.getElementById('delivery-method');


/**
 * Saves the current cart state to localStorage.
 */
function saveCart() {
    localStorage.setItem('ulamDealsCart', JSON.stringify(cart));
}

/**
 * Updates the displayed total quantity of items in the cart icon.
 */
function updateCartCount() {
    const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);
    if (cartCount) { // Ensure cartCount element exists before updating
        cartCount.textContent = totalQty;
    }
    saveCart(); // Save cart whenever count updates
}

/**
 * Creates an HTML product card element for a given dish.
 * @param {object} dish - The dish object containing name, price, category, img, and description.
 * @returns {HTMLElement} The created product card div.
 */
function createProductCard(dish) {
    const div = document.createElement("div");
    div.className = "product-card scroll-fade-in";

    // Set background image for hover effect
    div.style.backgroundImage = `url('${dish.img}')`;
    div.style.backgroundColor = '#fff8f0'; // Ensure a base background color

    div.innerHTML = `
        <img src="${dish.img}" alt="${dish.name}" />
        <h4>${dish.name}</h4>
        <p>₱${dish.price.toFixed(2)}</p>
        <p class="dish-description">${dish.description}</p>
        <button class="add-to-cart-btn">Add to Cart</button>
    `;

    const addBtn = div.querySelector(".add-to-cart-btn");
    addBtn.addEventListener("click", (e) => {
        e.stopPropagation(); // Prevent card click if button is inside a clickable card
        addToCart(dish);
    });

    return div;
}

/**
 * Adds a dish to the shopping cart or increments its quantity if already present.
 * Updates the cart count and shows a temporary notification.
 * @param {object} dish - The dish object to add to the cart.
 */
function addToCart(dish) {
    const found = cart.find(item => item.name === dish.name);
    if (found) {
        found.qty++;
    } else {
        cart.push({ ...dish, qty: 1 });
    }
    updateCartCount();
    showCartPopup(`${dish.name} added to cart!`);
}

/**
 * Removes an item from the cart or decrements its quantity.
 * Updates the cart count and re-renders the cart page if it's active.
 * @param {string} itemName - The name of the item to remove.
 */
function removeFromCart(itemName) {
    const itemIndex = cart.findIndex(item => item.name === itemName);
    if (itemIndex > -1) {
        if (cart[itemIndex].qty > 1) {
            cart[itemIndex].qty--;
            showCartPopup(`${itemName} quantity reduced.`);
        } else {
            cart.splice(itemIndex, 1);
            showCartPopup(`${itemName} removed from cart.`);
        }
        updateCartCount();
        // If on the cart page, re-render it
        if (document.getElementById('cartPageContent')) {
            renderCartPage();
        }
    }
}

/**
 * Displays a temporary popup notification at the bottom right of the screen.
 * @param {string} message - The message to display in the popup.
 */
function showCartPopup(message) {
    if (cartPopup) { // Ensure popup element exists
        cartPopup.textContent = message;
        cartPopup.classList.add("show");
        setTimeout(() => {
            cartPopup.classList.remove("show");
        }, 2000);
    }
}

/**
 * Renders product cards on the grid, optionally filtered by category.
 * This function only runs on the homepage (index.html).
 * @param {string} [filter=""] - The category to filter products by. If empty, all dishes are rendered.
 */
function renderProducts(filter = "") {
    if (!productsGrid) return; // Exit if not on the page with productsGrid

    productsGrid.innerHTML = ""; // Clear existing products
    let filteredDishes = filter
        ? dishes.filter((d) => d.category === filter)
        : dishes;

    // Intersection Observer for product card animations
    const productObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                productObserver.unobserve(entry.target); // Stop observing once visible
            }
        });
    }, {
        root: null, // viewport
        rootMargin: '0px',
        threshold: 0.1 // Trigger when 10% of the item is visible
    });

    filteredDishes.forEach((dish) => {
        const productCard = createProductCard(dish);
        productsGrid.appendChild(productCard);
        productObserver.observe(productCard); // Observe each new product card
    });
}

// Event listeners for category filter buttons (only on index.html)
const categoryCards = document.querySelectorAll(".category-card");
if (categoryCards.length > 0) {
    categoryCards.forEach((card) => {
        card.addEventListener("click", () => {
            const selectedCategory = card.dataset.category;
            renderProducts(selectedCategory);
            // Remove active class from all category cards and add to the clicked one
            categoryCards.forEach((c) => c.classList.remove("active"));
            card.classList.add("active");
        });
    });
}

// Event listener for the "Shop Now" button on the home page
const shopNowBtn = document.querySelector(".shop-btn");
if (shopNowBtn) {
    shopNowBtn.addEventListener("click", () => {
        const productsSection = document.getElementById("products");
        if (productsSection) {
            productsSection.scrollIntoView({ behavior: "smooth" });
        }
    });
}

/**
 * Renders the content of the dedicated cart page (modal).
 * This function only runs on cart.html (or if modal is part of index.html).
 */
function renderCartPage() {
    if (!modalOrderItems || !modalOrderTotal) return; // Exit if elements are not present

    let orderItemsHtml = '';
    let totalPrice = 0;

    if (cart.length === 0) {
        orderItemsHtml = '<li style="justify-content: center; font-style: italic; color: #555; padding: 20px;">Your cart is empty.</li>';
        if (confirmOrderBtn) {
            confirmOrderBtn.disabled = true; // Disable place order button if cart is empty
            confirmOrderBtn.style.opacity = '0.5'; // Visually indicate disabled state
            confirmOrderBtn.style.cursor = 'not-allowed';
        }
    } else {
        if (confirmOrderBtn) {
            confirmOrderBtn.disabled = false; // Enable if items exist
            confirmOrderBtn.style.opacity = '1';
            confirmOrderBtn.style.cursor = 'pointer';
        }

        cart.forEach(item => {
            const itemTotal = item.price * item.qty;
            totalPrice += itemTotal;
            orderItemsHtml += `
                <li>
                    <span>${item.name} (x${item.qty})</span>
                    <span>₱${itemTotal.toFixed(2)}</span>
                    <button class="remove-item-btn" data-item-name="${item.name}">Remove</button>
                </li>
            `;
        });
    }

    modalOrderItems.innerHTML = orderItemsHtml;
    modalOrderTotal.textContent = `Total: ₱${totalPrice.toFixed(2)}`;

    // Add event listeners to newly created remove buttons
    modalOrderItems.querySelectorAll('.remove-item-btn').forEach(button => {
        button.addEventListener('click', (event) => {
            const itemName = event.target.dataset.itemName;
            removeFromCart(itemName);
        });
    });
}

// Event listener for the "Place Order" button on the cart page
if (confirmOrderBtn) {
    confirmOrderBtn.addEventListener('click', () => {
        // Retrieve current values of form fields
        const fullName = fullNameInput ? fullNameInput.value.trim() : '';
        const address = addressInput ? addressInput.value.trim() : '';
        const phone = phoneInput ? phoneInput.value.trim() : '';
        const deliveryMethod = deliveryMethodSelect ? deliveryMethodSelect.value : '';

        // Basic validation
        if (!deliveryMethod || !fullName || !address || !phone) {
            console.error('Please fill in all required delivery/payment information.');
            showCartPopup('Please complete all order details.');
            return;
        }

        if (cart.length === 0) {
            console.error('Your cart is empty! Add items before placing an order.');
            showCartPopup('Your cart is empty!');
            return;
        }

        // Calculate final total again for order submission to ensure accuracy
        let finalOrderTotal = 0;
        cart.forEach(item => {
            finalOrderTotal += item.price * item.qty;
        });

        // --- Simulate Order Submission ---
        console.log("Order Placed Details:", {
            items: cart,
            total: finalOrderTotal.toFixed(2),
            paymentMethod: deliveryMethod,
            customerName: fullName,
            deliveryAddress: address,
            contactPhone: phone
        });

        // Clear the cart
        cart.length = 0; // Clear the array
        updateCartCount(); // Update count and save to localStorage

        // Redirect to the thank you page after successful order
        window.location.href = 'thankyou.html';
    });
}


// Mobile menu toggle
if (menuIcon && navbar) {
    menuIcon.addEventListener('click', () => {
        navbar.classList.toggle('active');
        menuIcon.classList.toggle('bx-x'); // Changes menu icon to 'x'
    });
}

// Close mobile menu when a nav link is clicked
if (navbar) {
    navbar.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            navbar.classList.remove('active');
            menuIcon.classList.remove('bx-x');
        });
    });
}


// --- Page-Specific Initializations (using DOMContentLoaded) ---
document.addEventListener('DOMContentLoaded', () => {
    updateCartCount(); // Always update cart count on page load

    // Only render products and initialize category filters if on the homepage
    if (productsGrid) { // Check if the productsGrid element exists
        renderProducts(); // Initial render - show all products on homepage
    }

    // Only render cart page content if on the cart page
    if (document.getElementById("cartPageContent")) { // Check for a specific container on cart.html
        renderCartPage();
    }

    // Hero image slider functionality (only on home page)
    const heroImages = document.querySelectorAll(".hero-img");
    if (heroImages.length > 0) {
        let currentHeroImage = 0;
        heroImages[currentHeroImage].classList.add("active");

        function nextHeroImage() {
            heroImages[currentHeroImage].classList.remove("active");
            currentHeroImage = (currentHeroImage + 1) % heroImages.length;
            heroImages[currentHeroImage].classList.add("active");
        }
        setInterval(nextHeroImage, 5000);
    }

    // Intersection Observer for general section scroll animations
    // Exclude product cards from this general observer as they have their own
    const sectionsToAnimate = document.querySelectorAll('section:not(#home), .category-card, .cart-page-content, .thank-you-container');
    const sectionObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
                sectionObserver.unobserve(entry.target);
            }
        });
    }, {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    });

    sectionsToAnimate.forEach(element => {
        element.classList.add('scroll-fade-in');
        sectionObserver.observe(element);
    });
});