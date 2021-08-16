
// like button function
function like(heartbtn){
    if(heartbtn.classList.contains("far")){
        heartbtn.classList.remove("far");
        heartbtn.classList.add("fas");
    }else{
        heartbtn.classList.remove("fas");
        heartbtn.classList.add("far");
    }
}
// Add to cart function
function addToCart(item){
    item.classList.remove("hiden");
}
// Remove from cart function
function removeFromCart(item){
    item.classList.add("hiden");
}
