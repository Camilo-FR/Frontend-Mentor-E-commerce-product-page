const thumbnailImg = document.querySelectorAll(".thumbnail-img");
const bigProd = document.querySelectorAll(".big-prod");

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
