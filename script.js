const inputValue = (id) =>{
    const input = document.getElementById(id);
    const value = input.value;
    input.value = '';
    return value;
}
const addProduct = () => {
   const productName = inputValue("product-name");
   const productQuantity = inputValue("product-quantity");
//    console.log(productName, productQuantity);

   const number = Number(productQuantity);

   if(!isNaN(productName) || !Number(productQuantity)) {
    alert("mara kha halarput ")
    return;
   }
   setLocalStorage(productName, productQuantity);
//    console.log(productName, productQuantity);

// window.location.reload();
display();
}

const getLocalStorageData = () => {
    const products = localStorage.getItem("all-products");
    const parseProducts = JSON.parse(products);
    return parseProducts;
}
const setLocalStorage = (name, quantity) => {
    // console.log(name, quantity);
    let products = getLocalStorageData();
// console.log(products);
    if(!products){
        products = {};
    }
    // console.log(products);
    // products.name = name;
    // products.quantity = quantity;
    // products[name] = quantity;
    // console.log(products);
    if(products[name]){
        products[name] = parseInt(products[name]) + parseInt(quantity);
    }
    else{
        products[name] = quantity;
    }


    localStorage.setItem("all-products", JSON.stringify(products));

}
const display = () => {
    const products = getLocalStorageData();
    // console.table(products);
    const section = document.getElementById("all-products");
    section.textContent = "";

    for(const product in products){
        // console.log(product,products[product]);
        const name = product;
        const quantity = products[product];

        const div = document.createElement("div");
        div.innerHTML =`
        <div class=" shadow-sm p-3 mb-2 bg-body rounded">
            <span class="fs-1">${name}</span>
            Quantity:<small class="fw-bold">
                ${quantity}
            </small>
        </div>
        
        `;
        section.appendChild(div);
    }
}
display();