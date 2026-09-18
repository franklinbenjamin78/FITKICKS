// Function to generate the formatted product object
function generateProductCode() {
  const idInput = document.getElementById("prod-id");
  const categoryInput = document.getElementById("prod-category");
  const pinnedInput = document.getElementById("prod-pinned-select");
  const nameInput = document.getElementById("prod-name");
  const priceInput = document.getElementById("prod-price");
  const captionInput = document.getElementById("prod-caption");
  const sizesInput = document.getElementById("prod-sizes");

  const id = idInput ? idInput.value.trim() : "";
  const category = categoryInput ? categoryInput.value : "others";
  const pinned = pinnedInput ? pinnedInput.value === "true" : false;
  const name = nameInput ? nameInput.value.trim() : "";
  const price = priceInput ? parseFloat(priceInput.value) || 0 : 0;
  const caption = captionInput ? captionInput.value.trim() : "";
  const sizesRaw = sizesInput ? sizesInput.value.trim() : "";

  // Collect all filled Cloudinary links
  const linkElements = document.querySelectorAll(".cloudinary-link");
  const images = [];
  linkElements.forEach(el => {
    const val = el.value.trim();
    if (val.length > 0) {
      images.push(val);
    }
  });

  // Validation
  if (!id || !name || price <= 0 || images.length === 0) {
    alert("Please ensure Product ID, Name, Price, and at least 1 Image Link are provided.");
    return;
  }

  const sizes = sizesRaw.split(",").map(s => s.trim()).filter(s => s.length > 0);

  // Format JS object block with trailing comma
  const codeBlock = `  {
    id: ${parseInt(id, 10)},
    category: "${category}",
    pinned: ${pinned},
    name: "${name.replace(/"/g, '\\"')}",
    price: ${price},
    caption: "${caption.replace(/"/g, '\\"')}",
    images: ${JSON.stringify(images, null, 2).replace(/\n/g, "\n    ")},
    sizes: ${JSON.stringify(sizes)}
  },`;

  // Output generated code
  const outputElem = document.getElementById("code-output");
  if (outputElem) {
    outputElem.value = codeBlock;
    
    // Display control panels
    const instructions = document.getElementById("instructions");
    const copyBtn = document.getElementById("copyBtn");
    if (instructions) instructions.style.display = "block";
    if (copyBtn) copyBtn.style.display = "block";
    
    outputElem.scrollIntoView({ behavior: "smooth" });
  }
}

// Copy to Clipboard
function copyProductCode() {
  const outputElem = document.getElementById("code-output");
  if (!outputElem || !outputElem.value) {
    alert("No generated code to copy!");
    return;
  }

  outputElem.select();
  outputElem.setSelectionRange(0, 99999);

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(outputElem.value)
      .then(() => alert("Product code copied to clipboard!"))
      .catch(() => fallbackCopy(outputElem.value));
  } else {
    fallbackCopy(outputElem.value);
  }
}

function fallbackCopy(text) {
  try {
    document.execCommand("copy");
    alert("Product code copied to clipboard!");
  } catch (err) {
    alert("Failed to copy automatically. Please select text and copy manually.");
  }
}

// Automatically calculate next product ID if products array exists
function autoDetectId() {
  if (typeof products !== "undefined" && Array.isArray(products) && products.length > 0) {
    const maxId = Math.max(...products.map(p => p.id || 0));
    const idElem = document.getElementById("prod-id");
    if (idElem) {
      idElem.value = maxId + 1;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  autoDetectId();
});
