var Product = (function () {
    function Product() {
    }
    return Product;
}());
window.onload = function () {
    var addbtn = document.querySelector("input[type=button]");
    addbtn.onclick = addProduct;
};
function addProduct() {
    if (isAllDataValid()) {
        var product = getProduct();
        displayProduct(product);
    }
}
function getProduct() {
    var product = new Product();
    var productNameInput = document.getElementById("product-name");
    product.productName = productNameInput.value;
    var priceInput = document.getElementById("price");
    product.price = parseFloat(priceInput.value);
    var typeInput = document.getElementById("product-type");
    product.productType = typeInput.value;
    var availabilityInput = document.getElementById("availability");
    product.availability = availabilityInput.value;
    return product;
}
function displayProduct(myProduct) {
    var displayDiv = document.getElementById("display");
    var productHeading = document.createElement("h2");
    productHeading.innerText = myProduct.productName;
    var productInfo = document.createElement("p");
    productInfo.innerText = myProduct.productName + " is a " + myProduct.productType + " prooduct that \n    cost " + myProduct.price + ". This product is available " + myProduct.availability + ".";
    displayDiv.appendChild(productHeading);
    displayDiv.appendChild(productInfo);
}
function isAllDataValid() {
    return true;
}
