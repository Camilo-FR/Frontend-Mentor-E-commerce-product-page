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

panier.addEventListener("click", () => {
  cartModal.classList.toggle("show");
});

addProduct.addEventListener("click", () => {
  // On enlève 'cart is empty.' et on affiche le/les produit(s) concerné(s)
  cartProduct.classList.remove("show");
  cartChoice.classList.add("show");
});
