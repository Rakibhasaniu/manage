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
}


const setLocalStorage = (name, quantity) => {
    console.log(name, quantity);
}