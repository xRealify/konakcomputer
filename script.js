document.getElementById('login-form').addEventListener('submit', function(e) {
  e.preventDefault();

});


const popup = document.getElementById('popup');
const closeBtn = document.getElementsByClassName('close')[0];

document.getElementById('forgot-password').addEventListener('click', function() {
  popup.style.display = 'block';
});

closeBtn.addEventListener('click', function() {
  popup.style.display = 'none';
});

document.getElementById('submit-email').addEventListener('click', function() {
  const email = document.getElementById('email').value;

  
  document.getElementById('reset-info').innerText = "We've sent you a link to reset your password.";
});



  document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll('.image-slider img');
    let currentImage = 0;

    images[currentImage].style.display = 'block';

    setInterval(() => {
        images[currentImage].style.display = 'none';
        currentImage = (currentImage + 1) % images.length;
        images[currentImage].style.display = 'block';
    }, 3000);

    const addToCartBtn = document.getElementById('add-to-cart');
    addToCartBtn.addEventListener('click', function() {
        alert('Product added to cart!');
    });
});



document.addEventListener("DOMContentLoaded", function() {

  const productButtons = document.querySelectorAll(".product-grid button");


  productButtons.forEach((button) => {
    button.addEventListener("click", function() {

      window.location.href = "product.html";
    });
  });
});
