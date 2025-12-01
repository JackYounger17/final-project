$(document).ready(function () {
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || []; //gets this data from the local storage
    if (cart.length === 0) {
        $('#cartTotalItems').text('0');
        $('#cartTotalPrice').text('$0.00');
    } else {
        let totalPrice = 0;
        cart.forEach((item) => {
            totalPrice = totalPrice + parseFloat(item.price);
        });
        $('#cartTotalItems').text(cart.length);
        $('#cartTotalPrice').text(`$${totalPrice.toFixed(2)}`);
    }
    $('#paymentForm').submit(function (event) {
        event.preventDefault();
        if (cart.length === 0) {
            alert('Please add some items to your cart.'); //sends error message if cart is empty
            return; 
        }
        let cardName = $('#cardName').val().trim();
        let cardNumber = $('#cardNumber').val().trim(); //assigns the form values to these variables
        let expiryDate = $('#expiryDate').val().trim();
        let cvv = $('#cvv').val().trim();
        if (!cardName || !cardNumber || !expiryDate || !cvv) {
            alert('Please fill out all payment details.');// if not fully completed
            return;
        }
        alert('Payment Successful! Thank you for your purchase.');
        localStorage.removeItem('shoppingCart');
        document.location.href = 'index.html';  // redirects to the homepage after payment
    });
});