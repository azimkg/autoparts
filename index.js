// const productImg = document.getElementById("productImg");
const categories = document.getElementById("categories")
const openCat1 = document.getElementById("openCat1")
const openCat2 = document.getElementById("openCat2")
const closeCat = document.getElementById("closeCat")
const catblock = document.getElementById("catblock")
const cart = document.getElementById("cart")
const cartBlock = document.getElementById("cartBlock")
const cartIcon = document.getElementById("cartIcon")
const closeCart = document.getElementById("closeCart")

// productImg.addEventListener("mouseover", function () {
//     productImg.src = "/images/brakes2.jpg";
// });

// productImg.addEventListener("mouseout", function () {
//     productImg.src = "/images/brakes1.jpg";
// });

openCat1.addEventListener("click", () => {
    categories.classList.remove("hidden")
    categories.classList.add("flex")
    catblock.classList.add("animate-right")
    catblock.classList.remove("animate-left")
})

openCat2.addEventListener("click", () => {
    categories.classList.remove("hidden")
    categories.classList.add("flex")
    catblock.classList.add("animate-right")
    catblock.classList.remove("animate-left")
})

closeCat.addEventListener("click", () => {
    catblock.classList.remove("animate-right")
    catblock.classList.add("animate-left")
    setTimeout(() => {
        categories.classList.add("hidden")
        categories.classList.add("flex")
    }, 500)
})

cartIcon.addEventListener("click", () => {
    cart.classList.remove("hidden")
    cart.classList.add("flex")
    cartBlock.classList.add("animate-right")
    cartBlock.classList.remove("animate-left")
})

closeCart.addEventListener("click", () => {
    cartBlock.classList.remove("animate-right")
    cartBlock.classList.add("animate-left")
    setTimeout(() => {
        cart.classList.add("hidden")
        cart.classList.add("flex")
    }, 500)
})