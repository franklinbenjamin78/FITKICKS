// Function to generate JavaScript product object code
function generateProductCode() {
  const idInput = document.getElementById("prod-id").value.trim();
  const category = document.getElementById("prod-category").value;
  const pinned = document.getElementById("prod-pinned").checked;
  const name = document.getElementById("prod-name").value.trim();
  const price = parseFloat(document.getElementById("prod-price").value) || 0;
  const caption = document.getElementById("prod-caption").value.trim();
  const sizesInput = document.getElementById("prod-sizes").value.trim();

  // Collect all non-empty links from the link input fields
  const linkInputs = document.querySelectorAll(".cloudinary-link");
  const images = [];
  linkInputs.forEach(input => {
    const val = input.value.trim();
    if (val.length > 0) {
      images.push(val);
    }
  });

  if (!idInput || !name || !price || images.length === 0) {
    alert("Please fill in all required fields (ID, Name, Price, and at least 1 Image link).");
    return;
  }

  const id = parseInt(idInput, 10);
  const sizes = sizesInput.split(",").map(s => s.trim()).filter(s => s.length > 0);

  // Construct formatted product object string
  const formattedCode = `  {
    id: ${id},
    category: "${category}",
    pinned: ${pinned},
    name: "${name.replace(/"/g, '\\"')}",
    price: ${price},
    caption: "${caption.replace(/"/g, '\\"')}",
    images: ${JSON.stringify(images, null, 2).replace(/\n/g, "\n    ")},
    sizes: ${JSON.stringify(sizes)}
  },`;

  const outputElem = document.getElementById("code-output");
  if (outputElem) {
    outputElem.value = formattedCode;
  }
}

// Function to copy generated code to clipboard
function copyProductCode() {
  const outputElem = document.getElementById("code-output");
  if (!outputElem || !outputElem.value) {
    alert("Nothing to copy! Generate code first.");
    return;
  }

  outputElem.select();
  outputElem.setSelectionRange(0, 99999);

  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(outputElem.value).then(() => {
      alert("Product code copied to clipboard!");
    }).catch(() => {
      fallbackCopyCode(outputElem.value);
    });
  } else {
    fallbackCopyCode(outputElem.value);
  }
}

function fallbackCopyCode(text) {
  try {
    document.execCommand("copy");
    alert("Product code copied to clipboard!");
  } catch (err) {
    alert("Copy failed. Please manually select and copy the text.");
  }
}

// Auto-calculate next Product ID based on existing products array
function autoSetNextId() {
  if (typeof products !== "undefined" && Array.isArray(products) && products.length > 0) {
    const maxId = Math.max(...products.map(p => p.id || 0));
    const nextIdElem = document.getElementById("prod-id");
    if (nextIdElem) {
      nextIdElem.value = maxId + 1;
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  autoSetNextId();
});
