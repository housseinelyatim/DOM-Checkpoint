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
var Tootal = 0;
// Update function
function update(total){
    total += (parseFloat(document.getElementById("Qty-se").value)*1999)+(parseFloat(document.getElementById("Qty-VIII-plus").value)*2299)+(parseFloat(document.getElementById("Qty-XI").value)*2999)+(parseFloat(document.getElementById("Qty-XI-pro").value)*4199)+(parseFloat(document.getElementById("Qty-XII").value)*3599)+(parseFloat(document.getElementById("Qty-XII-pro").value)*4999);
    document.getElementById("Total").innerHTML = total;
}