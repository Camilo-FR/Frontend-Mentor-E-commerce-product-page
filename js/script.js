const thumbnailImg = document.querySelectorAll(".thumbnail-img");
const bigProd = document.querySelectorAll(".big-prod");
const less = document.querySelector(".less");
const more = document.querySelector(".more");
const quantity = document.querySelector(".quantity");
const panier = document.querySelector(".panier");
const cartModal = document.querySelector(".cart-modal");
const addProduct = document.querySelector(".add-product");
const cartProduct = document.querySelector(".cart-product");
const cartChoice = document.querySelector(".cart-choice");
const topProductText = document.querySelector(".top-product-text");
const topProductDelete = document.querySelector(".top-product-delete");
const result = document.querySelector(".result-text");
const slider = document.querySelector(".slider");
const overlayOn = document.querySelector(".bg-opacity");
const closeSlider = document.querySelector(".close-slider");
const nextSlider = document.querySelector(".next-slider");
const previousSlider = document.querySelector(".previous-slider");
const thumbnailSlider = document.querySelector(".thumbnail-slider");
const thumbnailSliderImg = document.querySelectorAll(".thumbnail-slider-img");
const bigProdSlider = document.querySelectorAll(".big-prod-slider");

//Partie Thumbnail

thumbnailImg.forEach((img) => {
  img.addEventListener("click", () => {
    thumbnailImg.forEach((img) => img.classList.remove("thumbnail-border"));
    img.classList.add("thumbnail-border");

    // console.log(img.dataset.identity);
    const bigProdShow = document.querySelector(
      ".bigProd" + img.dataset.identity
    );

    bigProd.forEach((pic) => {
      pic.classList.remove("show");
    });

    bigProdShow.classList.add("show");
  });
});

// Partie + et - en sélection de produits

more.addEventListener("click", () => {
  let moreNumber = parseInt(quantity.textContent);
  quantity.textContent = moreNumber + 1;
});

less.addEventListener("click", () => {
  if (quantity.textContent > 0) {
    quantity.textContent = quantity.textContent - 1;
  }
});

// Partie sur le panier

panier.addEventListener("click", () => {
  cartModal.classList.toggle("show");
});

addProduct.addEventListener("click", () => {
  // On enlève 'cart is empty.' et on affiche le/les produit(s) concerné(s)
  cartProduct.classList.remove("show");
  cartChoice.classList.add("show");

  topProductText.textContent =
    "Fall Limited Edition Sneakers $125.00 x " + quantity.textContent;

  result.textContent = " $" + 125 * quantity.textContent + ".00";
});

// Pour delete le panier

topProductDelete.addEventListener("click", () => {
  cartChoice.classList.remove("show");
  cartProduct.classList.add("show");
});

// Slider apparition

bigProd.forEach((bigImg) => {
  bigImg.addEventListener("click", () => {
    slider.classList.add("show");
    overlayOn.classList.add("show");
    thumbnailSlider.classList.add("show");
  });
});

closeSlider.addEventListener("click", () => {
  slider.classList.remove("show");
  overlayOn.classList.remove("show");
  thumbnailSlider.classList.remove("show");
});

// thumbnail slider

thumbnailSliderImg.forEach((img) => {
  img.addEventListener("click", () => {
    thumbnailSliderImg.forEach((pic) => {
      pic.classList.remove("thumbnail-border");
    });

    img.classList.add("thumbnail-border");

    // console.log(img.dataset.slider);

    const bigProdShowSlider = document.querySelector(
      ".bigProdSlider" + img.dataset.slider
    );

    bigProdSlider.forEach((pic) => {
      pic.classList.remove("show");
    });

    console.log(bigProdShowSlider);
    bigProdShowSlider.classList.add("show");
  });
});

// thumbnailSliderImg.forEach((img) => {
//   img.addEventListener("click", () => {
//     thumbnailSliderImg.forEach((img) =>
//       img.classList.remove("thumbnail-border")
//     );
//     img.classList.add("thumbnail-border");

//     console.log(img.dataset.slider);
//     const bigProdShowSlider = document.querySelector(
//       ".bigProdSlider" + img.dataset.slider
//     );

//     bigProdSlider.forEach((pic) => {
//       pic.classList.remove("show");
//     });

//     bigProdShowSlider.classList.add("show");
//   });
// });
