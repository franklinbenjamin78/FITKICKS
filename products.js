// STORE CONTACT DETAILS  
const WHATSAPP_NUMBER = "2347071839581"; 
const INSTAGRAM_HANDLE = "shakaman_stores"; // Your Instagram handle

// SHOPPING CART STATE  
let cart = [];  
let activeCategory = "all";

// YOUR PRODUCT LIST  
const products = [    
  {      
    id: 1,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: [
      "https://res.cloudinary.com/vpgritcv/image/upload/v1789384369/WhatsApp_Image_2026-09-13_at_08.33.37_1.jpg",
      "https://res.cloudinary.com/vpgritcv/image/upload/v1789384366/WhatsApp_Image_2026-09-13_at_08.33.37.jpg"
    ],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  },    
  {      
    id: 2,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: ["https://res.cloudinary.com/vpgritcv/image/upload/v1789384365/WhatsApp_Image_2026-09-13_at_08.33.19.jpg"],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  },    
  {      
    id: 3,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: ["https://res.cloudinary.com/vpgritcv/image/upload/v1789384365/WhatsApp_Image_2026-09-13_at_08.33.31.jpg"],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  },    
  {      
    id: 4,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: ["https://res.cloudinary.com/vpgritcv/image/upload/v1789384365/WhatsApp_Image_2026-09-13_at_08.33.36.jpg"],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  },    
  {      
    id: 5,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: ["https://res.cloudinary.com/vpgritcv/image/upload/v1789384365/WhatsApp_Image_2026-09-13_at_08.33.35_1.jpg"],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  },
  {      
    id: 6,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: [
      "https://res.cloudinary.com/vpgritcv/image/upload/v1789384365/WhatsApp_Image_2026-09-13_at_08.33.33.jpg",
      "https://res.cloudinary.com/vpgritcv/image/upload/v1789384364/WhatsApp_Image_2026-09-13_at_08.33.34.jpg"
    ],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  },
  {      
    id: 7,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: ["https://res.cloudinary.com/vpgritcv/image/upload/v1789384364/WhatsApp_Image_2026-09-13_at_08.21.11.jpg"],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  },
  {      
    id: 8,      
    category: "new-balance",      
    pinned: false,      
    name: "HIGH QUALITY NEW BALANCE SNEAKERS",      
    price: 85000,      
    caption: "HIGH QUALITY NEW BALANCE SNEAKERS - Premium Build & Comfort.",      
    images: [
      "https://res.cloudinary.com/vpgritcv/image/upload/v1788818605/WhatsApp_Image_2026-09-07_at_14.50.06_1.jpg",
      "https://res.cloudinary.com/vpgritcv/image/upload/v1788818606/WhatsApp_Image_2026-09-07_at_14.50.06.jpg"
    ],      
    sizes: ["40", "41", "42", "43", "44", "45"]    
  }
];

// Render all products  
function renderProducts() {    
  const feedContainer = document.getElementById("feed-container");    
  feedContainer.innerHTML = "";

  // SORT PRODUCTS: Pinned items are sorted to the front of the list    
  const sortedProducts = [...products].sort((a, b) => (b.pinned ? 1 : 0) - (a.pinned ? 1 : 0));

  sortedProducts.forEach((product) => {      
    const slidesHtml = product.images        
      .map(mediaUrl => {          
        const isVideo = mediaUrl.endsWith('.mp4') || mediaUrl.includes('/video/upload/');

        if (isVideo) {            
          return `              
            <div class="swiper-slide">                
              <div class="video-container">                  
                <video src="${mediaUrl}" autoplay loop muted playsinline style="width:100%; height:100%; object-fit:cover;"></video>                  
                <button class="audio-toggle-btn" onclick="event.stopPropagation(); toggleAudio(this)" aria-label="Toggle Sound">                    
                  <svg class="icon-muted" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">                      
                    <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z"/>                    
                  </svg>                    
                  <svg class="icon-unmuted" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style="display: none;">                      
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>                    
                  </svg>                  
                </button>                
              </div>              
            </div>`;          
        } else {            
          return `              
            <div class="swiper-slide">                
              <img src="${mediaUrl}" alt="${product.name}">              
            </div>`;          
        }        
      })        
      .join("");

    const sizesHtml = product.sizes        
      .map(size => `<option value="${size}">Size ${size}</option>`)        
      .join("");

    // PIN BADGE HTML FOR FEED & GRID VIEWS      
    const pinHeaderBadge = product.pinned ? `<div class="pin-badge">📌 Pinned</div>` : ``;      
    const gridPinBadge = product.pinned ? `<div class="grid-pin-badge">📌</div>` : ``;

    const postHtml = `        
      <div class="post" data-category="${product.category}" onclick="handlePostClick(this)" data-product="${product.name.toLowerCase()} ${product.caption.toLowerCase()}">          
        ${gridPinBadge}          
        <div class="post-header">            
          <div class="avatar"></div>            
          <div class="username">shakaman_stores</div>            
          ${pinHeaderBadge}          
        </div>                    
        <div class="swiper post-carousel">            
          <div class="swiper-wrapper">              
            ${slidesHtml}            
          </div>            
          <div class="swiper-pagination"></div>            
          <div class="swiper-button-next"></div>            
          <div class="swiper-button-prev"></div>          
        </div>                    
        <div class="post-content">            
          <div class="price-tag">₦ ${product.price.toLocaleString()}</div>            
          <div class="caption">              
            <span>shakaman_stores</span> ${product.caption}            
          </div>                        
          <div class="size-picker">              
            <label for="size-${product.id}">Select Size:</label>              
            <select id="size-${product.id}">                
              ${sizesHtml}              
            </select>            
          </div>

          <div class="post-actions">              
            <button class="btn-add-cart" onclick="event.stopPropagation(); addToCart(${product.id}, 'size-${product.id}')">                
              Add to Cart              
            </button>

            <button class="btn-whatsapp" onclick="event.stopPropagation(); orderSingleWhatsapp(${product.id}, 'size-${product.id}')">                
              WhatsApp              
            </button>

            <button class="btn-instagram" onclick="event.stopPropagation(); orderSingleInstagram(${product.id}, 'size-${product.id}')">                
              Instagram DM              
            </button>            
          </div>          
        </div>        
      </div>      
    `;
    feedContainer.insertAdjacentHTML("beforeend", postHtml);    
  });

  // Initialize Swiper    
  new Swiper('.post-carousel', {      
    loop: false,      
    pagination: { el: '.swiper-pagination', clickable: true },      
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },    
  });  
}

// --- CATEGORY FILTER FUNCTION ---  
function filterByCategory(categoryKey, btnElement) {    
  activeCategory = categoryKey;

  document.querySelectorAll('.category-chip').forEach(chip => chip.classList.remove('active'));    
  if (btnElement) btnElement.classList.add('active');

  filterPosts();  
}

// --- CART FUNCTIONS ---  
function addToCart(productId, sizeSelectId) {    
  const selectedSize = document.getElementById(sizeSelectId).value;    
  const product = products.find(p => p.id === productId);

  const existingIndex = cart.findIndex(item => item.id === productId && item.size === selectedSize);

  if (existingIndex > -1) {      
    cart[existingIndex].quantity += 1;    
  } else {      
    cart.push({        
      id: product.id,        
      name: product.name,        
      price: product.price,        
      size: selectedSize,        
      image: product.images[0] || "",        
      quantity: 1      
    });    
  }

  updateCartUI();    
  alert(`Added ${product.name} (Size ${selectedSize}) to your cart!`);  
}

// DIRECT SINGLE ITEM ORDER VIA WHATSAPP
function orderSingleWhatsapp(productId, sizeSelectId) {    
  const selectedSize = document.getElementById(sizeSelectId).value;    
  const product = products.find(p => p.id === productId);
  const imageUrl = product.images[0] || "";

  const message = `Hello, I want to order the following sneaker:\n\n` +                    
                  `👟 *Item:* ${product.name}\n` +                    
                  `💰 *Price:* ₦${product.price.toLocaleString()}\n` +                    
                  `📏 *Size:* ${selectedSize}\n` +                    
                  `🖼️ *Product Link:* ${imageUrl}\n\n` +                    
                  `Please let me know how to proceed with payment and delivery.`;
                        
  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;  
}

// DIRECT SINGLE ITEM ORDER VIA INSTAGRAM DM
function orderSingleInstagram(productId, sizeSelectId) {
  const selectedSize = document.getElementById(sizeSelectId).value;
  const product = products.find(p => p.id === productId);
  const imageUrl = product.images[0] || "";

  const message = `Hello, I want to order this item:\n\n` +
                  `👟 Item: ${product.name}\n` +
                  `💰 Price: ₦${product.price.toLocaleString()}\n` +
                  `📏 Size: ${selectedSize}\n` +
                  `🖼️ Link: ${imageUrl}`;

  copyToClipboardAndRedirect(message, `https://ig.me/m/${INSTAGRAM_HANDLE}`);
}

function removeFromCart(index) {    
  cart.splice(index, 1);    
  updateCartUI();  
}

function updateCartUI() {    
  const badge = document.getElementById('cart-badge');    
  const container = document.getElementById('cart-items-container');    
  const totalElem = document.getElementById('cart-total-price');

  const totalCount = cart.reduce((sum, item) => sum + item.quantity, 0);    
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  if (totalCount > 0) {      
    badge.textContent = totalCount;      
    badge.style.display = 'flex';    
  } else {      
    badge.style.display = 'none';    
  }

  if (cart.length === 0) {      
    container.innerHTML = `<p style="text-align:center; color:#8e8e8e; padding: 20px 0;">Your cart is empty.</p>`;      
    document.getElementById('delivery-form').style.display = 'none';    
  } else {      
    document.getElementById('delivery-form').style.display = 'block';      
    container.innerHTML = cart.map((item, index) => `        
      <div class="cart-item">          
        <div class="cart-item-info">            
          <p>${item.name}</p>            
          <span>Size: ${item.size} | Qty: ${item.quantity} | ₦ ${(item.price * item.quantity).toLocaleString()}</span>          
        </div>          
        <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>        
      </div>      
    `).join('');    
  }

  totalElem.textContent = `₦ ${totalPrice.toLocaleString()}`;  
}

function toggleCartModal() {    
  const modal = document.getElementById('cart-modal');    
  modal.style.display = (modal.style.display === 'flex') ? 'none' : 'flex';  
}

function closeCartOnOutsideClick(e) {    
  if (e.target.id === 'cart-modal') {      
    toggleCartModal();    
  }  
}

// Multi-item Checkout via WhatsApp
function checkoutCartViaWhatsapp() {    
  if (cart.length === 0) {      
    alert("Your cart is empty!");      
    return;    
  }

  const name = document.getElementById('cust-name').value.trim();    
  const phone = document.getElementById('cust-phone').value.trim();    
  const address = document.getElementById('cust-address').value.trim();

  if (!name || !phone || !address) {      
    alert("Please fill in your Name, Phone Number, and Delivery Address before checking out.");      
    return;    
  }

  let itemsList = cart.map((item, i) => 
    `${i + 1}. *${item.name}*\n   Size: ${item.size} | Qty: ${item.quantity} | Price: ₦${(item.price * item.quantity).toLocaleString()}\n   Link: ${item.image}`
  ).join('\n\n');    
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const message = `🚨 *NEW CART ORDER PLACED* 🚨\n\n` +                    
                  `👤 *Customer Name:* ${name}\n` +                    
                  `📞 *Calling Phone:* ${phone}\n` +                    
                  `📍 *Delivery Address:* ${address}\n\n` +                    
                  `📦 *ORDER DETAILS:*\n` +                    
                  `${itemsList}\n\n` +                    
                  `💰 *TOTAL AMOUNT:* ₦${totalPrice.toLocaleString()}\n\n` +                    
                  `Please confirm availability and payment options for delivery.`;

  window.location.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;  
}

// Multi-item Checkout via Instagram DM (With Clipboard Copying)
function checkoutCartViaInstagram() {
  if (cart.length === 0) {
    alert("Your cart is empty!");
    return;
  }

  const name = document.getElementById('cust-name').value.trim();
  const phone = document.getElementById('cust-phone').value.trim();
  const address = document.getElementById('cust-address').value.trim();

  if (!name || !phone || !address) {
    alert("Please fill in your Name, Phone Number, and Delivery Address before checking out.");
    return;
  }

  let itemsList = cart.map((item, i) => 
    `${i + 1}. ${item.name}\n   Size: ${item.size} | Qty: ${item.quantity} | ₦${(item.price * item.quantity).toLocaleString()}\n   Link: ${item.image}`
  ).join('\n\n');
  
  const totalPrice = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);

  const message = `🚨 NEW INSTAGRAM MULTI-ITEM ORDER 🚨\n\n` +
                  `👤 Name: ${name}\n` +
                  `📞 Phone: ${phone}\n` +
                  `📍 Address: ${address}\n\n` +
                  `📦 ITEMS ORDERED:\n${itemsList}\n\n` +
                  `💰 TOTAL AMOUNT: ₦${totalPrice.toLocaleString()}\n\n` +
                  `Please confirm availability and payment options.`;

  copyToClipboardAndRedirect(message, `https://ig.me/m/${INSTAGRAM_HANDLE}`);
}

// HELPER FUNCTION: COPIES ORDER TEXT TO CLIPBOARD & REDIRECTS TO INSTAGRAM
function copyToClipboardAndRedirect(textToCopy, targetUrl) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(textToCopy).then(() => {
      alert("Order details copied to clipboard! Paste it directly into your Instagram DM thread.");
      window.location.href = targetUrl;
    }).catch(err => {
      fallbackCopyText(textToCopy, targetUrl);
    });
  } else {
    fallbackCopyText(textToCopy, targetUrl);
  }
}

// FALLBACK COPY FOR OLDER BROWSERS
function fallbackCopyText(textToCopy, targetUrl) {
  const textArea = document.createElement("textarea");
  textArea.value = textToCopy;
  textArea.style.position = "fixed";
  textArea.style.left = "-999999px";
  document.body.appendChild(textArea);
  textArea.focus();
  textArea.select();

  try {
    document.execCommand('copy');
    alert("Order details copied to clipboard! Paste it directly into your Instagram DM thread.");
  } catch (err) {
    alert("Opening Instagram DM...");
  }

  document.body.removeChild(textArea);
  window.location.href = targetUrl;
}

// Toggle Video Sound  
function toggleAudio(buttonElement) {    
  const video = buttonElement.previousElementSibling;    
  const iconMuted = buttonElement.querySelector('.icon-muted');    
  const iconUnmuted = buttonElement.querySelector('.icon-unmuted');

  if (video.muted) {      
    video.muted = false;      
    iconMuted.style.display = 'none';      
    iconUnmuted.style.display = 'block';    
  } else {      
    video.muted = true;      
    iconMuted.style.display = 'block';      
    iconUnmuted.style.display = 'none';    
  }  
}

// Expand Feed View from Grid Click
function handlePostClick(element) {    
  const container = document.getElementById('feed-container');    
  const backBtn = document.getElementById('back-grid-btn');

  if (container.classList.contains('grid-mode')) {      
    container.classList.remove('grid-mode');      
    container.classList.add('feed-mode');      
    backBtn.style.display = 'flex';          
    setTimeout(() => {        
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });      
    }, 50);    
  }  
}

// Return to Grid View  
function switchToGridMode() {    
  const container = document.getElementById('feed-container');    
  const backBtn = document.getElementById('back-grid-btn');

  container.classList.remove('feed-mode');    
  container.classList.add('grid-mode');    
  backBtn.style.display = 'none';        
  window.scrollTo({ top: 0, behavior: 'smooth' });    
  setActiveNav('nav-home');  
}

// Search Functions  
function toggleSearchBar() {    
  const searchBar = document.getElementById('search-bar');    
  const searchInput = document.getElementById('search-input');    
  const isSearchActive = searchBar.classList.contains('active');

  if (!isSearchActive) {      
    searchBar.classList.add('active');      
    searchInput.focus();      
    setActiveNav('nav-search');    
  } else {      
    searchBar.classList.remove('active');      
    searchInput.value = '';      
    filterPosts();      
    setActiveNav('nav-home');    
  }  
}

function setActiveNav(navId) {    
  document.querySelectorAll('.nav-item').forEach(item => item.classList.remove('active'));    
  document.getElementById(navId).classList.add('active');  
}

function filterPosts() {    
  const query = document.getElementById('search-input').value.toLowerCase().trim();    
  const posts = document.querySelectorAll('.post');    
  let visibleCount = 0;

  posts.forEach(post => {      
    const productKeywords = post.getAttribute('data-product');      
    const postCategory = post.getAttribute('data-category');

    const matchesSearch = productKeywords.includes(query);      
    const matchesCategory = (activeCategory === 'all') || (postCategory === activeCategory);

    if (matchesSearch && matchesCategory) {        
      post.style.display = 'block';        
      visibleCount++;      
    } else {        
      post.style.display = 'none';      
    }    
  });

  document.getElementById('no-results').style.display = visibleCount === 0 ? 'block' : 'none';  
}

// Initial Run  
renderProducts();
