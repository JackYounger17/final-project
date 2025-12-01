$(document).ready(function () {
    let cart = JSON.parse(localStorage.getItem('shoppingCart')) || [];
    if (cart.length === 0) { //if the cart is empty display cart empty message
        $('#cartItems').html('<p>Your shopping cart is empty.</p>');
        $('#cartTotalItems').html('Total: <span class="text-muted">0 items</span>');
        $('#cartTotalPrice').html('$0.00');
        return;
    }
    let totalPrice = 0;
    cart.forEach((item, index) => {
        totalPrice = totalPrice + parseFloat(item.price); // creates graphic for each cart in the checkout and tracks price
        let cartItem = `
            <div class="d-flex justify-content-between align-items-center mb-3 border-bottom pb-3"> 
                <img src="${item.image}" alt="${item.name}" style="width: 150px; height: 150px; object-fit: cover; border-radius: 8px;">
                <div>
                    <h3 class="mb-1">${item.name}</h3>
                </div>
                <div>
                    <p class="mb-1 fw-bold">$${item.price}</p>
                    <div class="cart-item-actions">
                        <a href="" class="remove-item" style="color: #9A1F2E;" data-index="${index}">Remove</a>
                    </div>
                </div>
            </div>
        `; 
        $('#cartItems').append(cartItem);
    });
    $('#cartTotalItems').html(`Total: <span class="text-muted">${cart.length} items</span>`);
    $('#cartTotalPrice').html(`$${totalPrice.toFixed(2)}`);
    $(document).on('click', '.remove-item', function () { // removes indivual item from local storage
        let index = $(this).data('index');
        cart.splice(index, 1);
        localStorage.setItem('shoppingCart', JSON.stringify(cart));
        location.reload();
    });
    $('#clearCart').click(function () { // removes all items from localstorage and reloads the page
        localStorage.removeItem('shoppingCart');
        location.reload();
    });
});