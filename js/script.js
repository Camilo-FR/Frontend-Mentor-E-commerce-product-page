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
const bigProdSlider = document.querySelectorAll(".big-slider-elements");
const nbSlide = bigProdSlider.length;
const nbThumbnail = thumbnailSliderImg.length;
const nbreArticle = document.querySelector(".nbre-article");
let count = 0;
let countThumbnail = 0;

// Fonctions

//Partie Thumbnail

thumbnailImg.forEach((img) => {
  img.addEventListener("click", () => {
    thumbnailImg.forEach((img) => img.classList.remove("thumbnail-border"));
    img.classList.add("thumbnail-border");

    const bigProdShow = document.querySelector(
      ".bigProd" + img.dataset.identity
    );

    countThumbnail = img.dataset.identity - 1;

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
  // Apparition du nombre d'article sur le logo panier

  nbreArticle.textContent = quantity.textContent;

  if (quantity.textContent == 0) {
    nbreArticle.classList.remove("show");
  } else {
    nbreArticle.classList.add("show");
  }

  // On enlève 'cart is empty.' et on affiche le/les produit(s) concerné(s)

  if (quantity.textContent > 0) {
    cartProduct.classList.remove("show");
    cartChoice.classList.add("show");

    topProductText.textContent =
      "Fall Limited Edition Sneakers $125.00 x " + quantity.textContent;

    result.textContent = " $" + 125 * quantity.textContent + ".00";
  }
});

// Pour delete le panier

topProductDelete.addEventListener("click", () => {
  cartChoice.classList.remove("show");
  cartProduct.classList.add("show");
});

// Slider apparition

bigProd.forEach((bigImg) => {
  bigImg.addEventListener("click", () => {
    overlayOn.classList.add("show");
    slider.classList.add("show");

    const bigImgSlider = document.querySelector(
      ".big-prod-slider" + bigImg.dataset.bigImg
    );
    bigProdSlider.forEach((img) => {
      img.classList.remove("show");
    });

    const thumBorder = document.querySelector(
      ".border" + bigImg.dataset.border
    );
    console.log(thumBorder);

    thumbnailSliderImg.forEach((thumb) => {
      thumb.classList.remove("thumbnail-border");
    });

    thumBorder.classList.add("thumbnail-border");
    bigImgSlider.classList.add("show");
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

    const bigProdShowSlider = document.querySelector(
      ".bigProdSlider" + img.dataset.slider
    );

    bigProdSlider.forEach((pic) => {
      pic.classList.remove("show");
    });

    bigProdShowSlider.classList.add("show");
  });
});

// Slider fonctionnement
function previousSlide() {
  thumbnailSliderImg[countThumbnail].classList.remove("thumbnail-border");

  if (countThumbnail > 0) {
    countThumbnail--;
  } else {
    countThumbnail = nbThumbnail - 1;
  }

  thumbnailSliderImg[countThumbnail].classList.add("thumbnail-border");

  bigProdSlider[count].classList.remove("show");

  bigProdSlider.forEach((pic) => {
    pic.classList.remove("show");
  });

  if (count > 0) {
    count--;
  } else {
    count = nbSlide - 1;
  }

  bigProdSlider[count].classList.add("show");
}

function nextSlide() {
  thumbnailSliderImg[countThumbnail].classList.remove("thumbnail-border");

  if (countThumbnail < nbThumbnail - 1) {
    countThumbnail++;
  } else {
    countThumbnail = 0;
  }

  thumbnailSliderImg[countThumbnail].classList.add("thumbnail-border");

  bigProdSlider[count].classList.remove("show");

  bigProdSlider.forEach((pic) => {
    pic.classList.remove("show");
  });

  if (count < nbSlide - 1) {
    count++;
  } else {
    count = 0;
  }

  bigProdSlider[count].classList.add("show");
}

previousSlider.addEventListener("click", previousSlide);
nextSlider.addEventListener("click", nextSlide);

// Partie mobile

//Menu burger

const burger = document.querySelector(".icon-menu-mobile");
const menu = document.querySelector(".mobile-nav");
const close = document.querySelector(".close-nav-mobile");

burger.addEventListener("click", () => {
  menu.classList.add("show");
});

close.addEventListener("click", () => {
  menu.classList.remove("show");
});

// Partie slider mobile

const previousSliderMobile = document.querySelector(".previous-slider-mobile");
const nextSliderMobile = document.querySelector(".next-slider-mobile");
const nbMobile = bigProd.length;
let countMobile = 0;

function previousSlideMobile() {
  if (countMobile > 0) {
    countMobile--;
  } else {
    countMobile = 0;
  }

  bigProd.forEach((pic) => {
    pic.classList.remove("show");
  });

  bigProd[countMobile].classList.add("show");
}

function nextSlideMobile() {
  if (countMobile < nbMobile - 1) {
    countMobile++;
  } else {
    countMobile = 0;
  }

  bigProd.forEach((pic) => {
    pic.classList.remove("show");
  });

  bigProd[countMobile].classList.add("show");
}

previousSliderMobile.addEventListener("click", previousSlideMobile);
nextSliderMobile.addEventListener("click", nextSlideMobile);
