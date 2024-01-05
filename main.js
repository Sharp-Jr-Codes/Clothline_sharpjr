// cart starts

document.addEventListener('DOMContentLoaded', function () {
    // Set the initial count
    let cartCount = 0;

    // Function to update the cart count in the modal
    function updateCartCount() {
        document.getElementById('cartCount').innerText = cartCount;
    }

    // Function to handle adding items to the cart
    function addToCart() {
        // Perform the logic to add the item to the cart
        // For example, increment the count
        cartCount++;

        // Update the cart count in the modal
        updateCartCount();
    }

    // Function to handle the checkout button click
    function checkout() {
        // Perform the logic for checkout
        // For example, redirect to a checkout page
        alert('Redirecting to checkout. Cart count: ' + cartCount);
    }

    // Initial update of the cart count
    updateCartCount();
});

// cart ends


const brandMarquee = document.getElementById('brandMarquee');
  const slider = document.querySelector('.slider');

  // Clone the slider content
  slider.innerHTML += slider.innerHTML;

  // Reset marquee when it finishes scrolling to the right
  brandMarquee.addEventListener('finish', () => {
    brandMarquee.scrollLeft = 0;
  });