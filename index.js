const productImg = document.getElementById("productImg");
productImg.addEventListener("mouseover", function () {
    productImg.src = "/images/brakes2.jpg";
});

productImg.addEventListener("mouseout", function () {
    productImg.src = "/images/brakes1.jpg";
});