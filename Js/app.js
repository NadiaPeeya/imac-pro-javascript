//here getting products prices from function
function getProductCost(price, product) {
    const productCost = document.getElementById(product + '-cost');
    const productAmount = price;
    productCost.innerText = productAmount;
    //Calling The Total Cost Function
    getTotalCost();
}

//function of delivery charge 
function getDeliveryCost(deliveryFee) {
    const deliveryCharge = document.getElementById('delivery-cost');
    const delivery = deliveryFee;
    deliveryCharge.innerText = delivery;
    //Calling The Total Cost Function
    getTotalCost();
}

//getting total and final from function
function getTotalCost() {
    const finalPrice = document.getElementById('final-price');
    const totalPrice = document.getElementById('total-cost');
    const bestPrice = document.getElementById('best-price').innerText;
    const memoryCost = document.getElementById('memory-cost').innerText;
    const storageCost = document.getElementById('storage-cost').innerText;
    const deliveryCost = document.getElementById('delivery-cost').innerText;
    const totalCost = parseFloat(bestPrice) + parseFloat(memoryCost) + parseFloat(storageCost) + parseFloat(deliveryCost);
    totalPrice.innerText = totalCost;
    finalPrice.innerText = totalCost;
}

//button of 8GB-memory
document.getElementById('8GB-memory').addEventListener('click', function (event) {
    //Calling Products Cost Function
    getProductCost(0, 'memory');
});

//Button of 8GB-memory
document.getElementById('16GB-memory').addEventListener('click', function (event) {
    //Calling Products Cost Function
    getProductCost(180, 'memory');
});

//Button of 256GB-storage
document.getElementById('256GB-storage').addEventListener('click', function (event) {
    //Calling Products Cost Function
    getProductCost(0, 'storage');
});

//Button of 512GB-storage
document.getElementById('512GB-storage').addEventListener('click', function (event) {
    //Calling Products Cost Function
    getProductCost(100, 'storage');
});

//Button of 1TB-storage
document.getElementById('1TB-storage').addEventListener('click', function (event) {
    //Calling Products Cost Function
    getProductCost(180, 'storage');
});

//Button of free-delivery
document.getElementById('free-delivery').addEventListener('click', function (event) {
    //Calling Products Cost Function
    getDeliveryCost(0);
});

//Button of premum-delivery
document.getElementById('premium-delivery').addEventListener('click', function (event) {
    //Calling Products Cost Function
    getDeliveryCost(20);
});

//Applying promo for getting discount price
document.getElementById('apply-promo').addEventListener('click', function () {
    const finalPrice = document.getElementById('final-price');
    const totalAmount = document.getElementById('total-cost');
    const totalCost = parseFloat(totalAmount.innerText);
    const promoCode = document.getElementById('promo-code');
    const applyPromoCode = promoCode.value;
    //checking promo code
    if (applyPromoCode == 'stevekaku') {
        // checking 20% discount
        const discount = (totalCost * 20) / 100;
        finalPrice.innerText = totalCost - discount;
        //clearing promo input value
        promoCode.value = ' ';
    }
});
