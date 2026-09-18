// Function to auto-calculate the next Product ID from products.js
function setNextProductId() {
  const idInput = document.getElementById('prodId');

  // Check if 'products' array is available from products.js
  if (typeof products !== 'undefined' && Array.isArray(products) && products.length > 0) {
    const maxId = Math.max(...products.map(p => p.id || 0));
    idInput.value = maxId + 1;
  } else {
    // Default fallback if products.js is not linked or empty
    idInput.value = 1;
  }
}

// Run auto-ID calculation when the page loads
document.addEventListener('DOMContentLoaded', setNextProductId);

document.getElementById('productForm').addEventListener('submit', function (e) {
  e.preventDefault();

  // Get form values
  const id = parseInt(document.getElementById('prodId').value);
  const category = document.getElementById('prodCategory').value;
  const name = document.getElementById('prodName').value.trim().toUpperCase();
  const price = parseInt(document.getElementById('prodPrice').value);
  const caption = document.getElementById('prodCaption').value.trim() || `${name} - Premium Build & Comfort.`;
  const pinned = document.getElementById('prodPinned').value === 'true';

  // Process multi-line Cloudinary links
  const rawImages = document.getElementById('prodImages').value.trim().split('\n');
  const images = rawImages
    .map(url => url.trim())
    .filter(url => url.length > 0);

  // Process comma-separated sizes
  const rawSizes = document.getElementById('prodSizes').value.split(',');
  const sizes = rawSizes
    .map(size => size.trim())
    .filter(size => size.length > 0);

  // Build object structure matching products.js
  const productObject = {
    id: id,
    category: category,
    pinned: pinned,
    name: name,
    price: price,
    caption: caption,
    images: images,
    sizes: sizes
  };

  // Format object into JS string
  const formattedJs = JSON.stringify(productObject, null, 2);

  // Show outputs
  const outputElem = document.getElementById('output');
  const instructionsElem = document.getElementById('instructions');
  const copyBtn = document.getElementById('copyBtn');

  outputElem.value = `  ${formattedJs},`;
  instructionsElem.style.display = 'block';
  copyBtn.style.display = 'block';

  // Smooth scroll to results
  outputElem.scrollIntoView({ behavior: 'smooth' });
});

// Function to copy code to clipboard
function copyProductCode() {
  const outputElem = document.getElementById('output');
  outputElem.select();
  outputElem.setSelectionRange(0, 99999);

  if (navigator.clipboard) {
    navigator.clipboard.writeText(outputElem.value).then(() => {
      alert("✅ Product code copied to clipboard!");
    });
  } else {
    document.execCommand('copy');
    alert("✅ Product code copied to clipboard!");
  }
}
