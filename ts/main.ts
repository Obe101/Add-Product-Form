class Product{
    productName:string;
    price:number;
    productType:string;
    deliverMethod:string;

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

    let deliveryInput = <HTMLSelectElement>document.getElementById("delivery-method");
    product.deliverMethod = deliveryInput.value;
    
    return product
}

function displayProduct(myProduct:Product):void {
    
}
//ADD vailidation code
function isAllDataValid() {
    return true;
}