class Product{
    productName:string;
    price:number;
    productType:string;
    availability:string;

}

window.onload =  function () {
    let addbtn = <HTMLElement>document.querySelector("input[type=button]");
    addbtn.onclick = addProduct;
}

function addProduct() {

    if(isAllDataValid()){
        let product = getProduct();
        displayProduct(product);

    }
}
/**
 * Gets all product data from the form 
 * and returns it in a Product object
*/

function getProduct():Product {
    
    //ToDo: Create game
    let product = new Product();
    //ToDo: Populate with data from form
    let productNameInput = <HTMLInputElement>document.getElementById("product-name");
    product.productName = productNameInput.value;

    let priceInput = <HTMLInputElement>document.getElementById("price");
    product.price = parseFloat(priceInput.value);

    let typeInput = <HTMLSelectElement>document.getElementById("product-type");
    product.productType = typeInput.value;

    let availabilityInput = <HTMLSelectElement>document.getElementById("availability");
    product.availability = availabilityInput.value;
    
    return product
}

function displayProduct(myProduct:Product):void {
    let displayDiv =document.getElementById("display");
   
    let productHeading = document.createElement("h2");
    productHeading.innerText = myProduct.productName;

    let productInfo = document.createElement("p");
    productInfo.innerText = `${myProduct.productName} is a ${myProduct.productType} prooduct that 
    cost ${myProduct.price}. This product is available ${myProduct.availability}.`

    // Add <h2> in the <div id="display">
    displayDiv.appendChild(productHeading);

    //Add <p> in the <div id="display">
    displayDiv.appendChild(productInfo);


}
//ADD vailidation code
function isAllDataValid() {
    return true;
}