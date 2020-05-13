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
    var deliveryInput = document.getElementById("delivery-method");
    product.deliverMethod = deliveryInput.value;
    return product;
}
function displayProduct(myProduct) {
}
function isAllDataValid() {
    return true;
}
