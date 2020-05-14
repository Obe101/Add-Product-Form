var Product = (function () {
    function Product() {
    }
    return Product;
}());
window.onload = function () {
    var addbtn = document.querySelector("input[type=button]");
    addbtn.onclick = addProduct;
    var clrbtn = document.getElementById("clear");
    clrbtn.onclick = clearForm;
};
function addProduct() {
    clearErrors();
    if (isAllDataValid()) {
        var product = getProduct();
        displayProduct(product);
    }
}
function clearForm() {
    clearProduct();
    clearErrors();
    var productNameInput = document.getElementById("product-name");
    productNameInput.value = "";
    var priceInput = document.getElementById("price");
    priceInput.value = "";
    var typeInput = document.getElementById("product-type");
    typeInput.selectedIndex = 0;
    var availabilityInput = document.getElementById("availability");
    availabilityInput.selectedIndex = 0;
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
function clearProduct() {
    var displayDiv = document.getElementById("display");
    displayDiv.innerHTML = "";
}
function getInputById(id) {
    return document.getElementById(id);
}
function isAllDataValid() {
    var valid = true;
    var productName = getInputById("product-name").value;
    if (productName == "") {
        valid = false;
        addErrorMsg("Product name is required");
    }
    var price = getInputById("price").value;
    var priceValue = parseFloat(price);
    if (price == "" || isNaN(priceValue)) {
        valid = false;
        addErrorMsg("Price is required and must a number");
    }
    var productType = document.getElementById("product-type").value;
    if (productType == "") {
        valid = false;
        addErrorMsg("Product type is required");
    }
    var availability = document.getElementById("availability").value;
    if (availability == "") {
        valid = false;
        addErrorMsg("Availability is required");
    }
    return valid;
}
function addErrorMsg(errMsg) {
    var errSummary = document.getElementById("validation-summary");
    var errItem = document.createElement("li");
    errItem.innerText = errMsg;
    errSummary.appendChild(errItem);
}
function clearErrors() {
    var errSummary = document.getElementById("validation-summary");
    errSummary.innerText = "";
}
