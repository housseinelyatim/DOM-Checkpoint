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
var Tootal = 0;
// Update function
function update(total){
    total += (parseFloat(document.getElementById("Qty-se").value)*1999)+(parseFloat(document.getElementById("Qty-VIII-plus").value)*2299)+(parseFloat(document.getElementById("Qty-XI").value)*2999)+(parseFloat(document.getElementById("Qty-XI-pro").value)*4199)+(parseFloat(document.getElementById("Qty-XII").value)*3599)+(parseFloat(document.getElementById("Qty-XII-pro").value)*4999);
    document.getElementById("Total").innerHTML = total;
}
// Add to cart function
function addToCart(item){
    item.classList.remove("hiden");
    //set the input value to 1
    if (item==document.getElementById('se')) {
        document.getElementById("Qty-se").value = "1";
    }else if(item==document.getElementById('VIII-plus')){
        document.getElementById("Qty-VIII-plus").value = "1"
    }else if (item==document.getElementById('XI')) {
        document.getElementById("Qty-XI").value = "1"
    }else if (item==document.getElementById('XI-pro')) {
        document.getElementById("Qty-XI-pro").value = "1"
    }else if (item==document.getElementById('XII')) {
        document.getElementById("Qty-XII").value = "1"
    }else if (item==document.getElementById('XII-pro')) {
        document.getElementById("Qty-XII-pro").value = "1"
    }
    // update total
    update(Tootal)
}
// Remove from cart function
function removeFromCart(item){
    item.classList.add("hiden");
    //set the input value to 0
    if (item==document.getElementById('se')) {
        document.getElementById("Qty-se").value = "0";
    }else if(item==document.getElementById('VIII-plus')){
        document.getElementById("Qty-VIII-plus").value = "0"
    }else if (item==document.getElementById('XI')) {
        document.getElementById("Qty-XI").value = "0"
    }else if (item==document.getElementById('XI-pro')) {
        document.getElementById("Qty-XI-pro").value = "0"
    }else if (item==document.getElementById('XII')) {
        document.getElementById("Qty-XII").value = "0"
    }else if (item==document.getElementById('XII-pro')) {
        document.getElementById("Qty-XII-pro").value = "0"
    }
    //update total
    update(Tootal)
}
// function purchase
function purchase(){
    alert("Thank you ")
}
